import React, { useState, useEffect } from "react";

// how to use the state hook in a React function component
const INITIAL_LIST = [
  {
    id: "0",
    title: "React with RxJS for State Management Tutorial",
    url: "https://www.robinwieruch.de/react-rxjs-state-management-tutorial/"
  },
  {
    id: "1",
    title: "A complete React with Apollo and GraphQL Tutorial",
    url: "https://www.robinwieruch.de/react-graphql-apollo-tutorial"
  }
];

function makeData() {
    let list = [];
    for (let index = 0; index < 10000; index++) {
        const newItem = {
            id: index,
            title: `111111111111111111113444444444444444444442222222 ${index}`,
            url: `3333333333333333333333333333333333333333333333333333 ${index}`,
            value: `888888888888lllllllllllllllllllllllllll ${index}`,
            description: `dessssssssssssssssccccccccccccssssssss ${index}`,
        }
        list = [...list, newItem]
    }
    return list;
}

const Counter = React.memo(function Counter() {
  const [limit, setLimit] = useState(5);
  const [offset, setOfflset] = useState(1);
  const [list, setList] = useState(listSlice(limit));
  const [inputValue, setInput] = useState("");

  function listSlice(limit) {
    const newList = [...makeData()];
    return newList.slice(0, limit);
  }

  function removeItem(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  useEffect(() => {
      console.log('pre-render');
  });

  useEffect(() => {
    setList(listSlice(limit));
  }, [limit]);

  function addItem() {
    if (inputValue) {
        const lastValue = list.length ? list[list.length -1] : 0;
        const newValue =  () => {
            if (lastValue) {
              return {
                  id: lastValue.id +1,
                  title: inputValue,
                  url: inputValue,
              }
            }
            return {
                id: 0,
                title: inputValue,
                url: inputValue,
            }
        }
        setList([...list, newValue()]);
        setInput('');
    }
  }

  return (
    <div>
      <ul>
        {list.map((item, index) => {
            return (
                <li key={item.id}>
                  <a href={item.url}>{item.title}</a>
                  <button onClick={() => removeItem(index)}>remove {index}</button>
                </li>
              )
        })}
      </ul>
      <span>
        <input
          type="text"
          onChange={e => setInput(e.target.value)}
          value={inputValue}
        />
        <button onClick={addItem}>Add Item</button>
      </span>
      <button onClick={() => setLimit(limit + 500)}>
            Load More
      </button>
    </div>
  );
});

export default Counter;
