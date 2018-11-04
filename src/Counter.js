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

const makeData = () => {
  let list = [];
  console.log('make data');
  for (let index = 0; index < 10000; index++) {
    const newItem = {
      id: index,
      title: `111111111111111111113444444444444444444442222222 ${index}`,
      url: `3333333333333333333333333333333333333333333333333333 ${index}`,
      value: `888888888888lllllllllllllllllllllllllll ${index}`,
      description: `dessssssssssssssssccccccccccccssssssss ${index}`
    };
    list = [...list, newItem];
  }
  return list;
};

const INITIAL_DATA = makeData();

// const ListItem = React.memo(function ListCounter(props) {
//   const { item, index, removeItem } = props;
//   console.log('item', index);
//   return (
//   );
// });

class ListItem extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        const { item, index, removeItem } = this.props;
        if (nextProps.index !== index || item.id !== nextProps.item.id) return true;
        return false;
    }
    render() { 
        console.log('render item');
        const { item, index, removeItem } = this.props;
        return (
            <li key={item.id}>
            <a href={item.url}>{item.title}</a>
            <button onClick={() => removeItem(index)}>remove {index}</button>
            </li>
        )
  }
}

const Counter = React.memo(function Counter() {
  const [limit, setLimit] = useState(100);
  const [offset, setOfflset] = useState(1);
  const [list, setList] = useState([]);
  const [inputValue, setInput] = useState("");

  function listSlice(limit) {
    console.log("list lsice");
    const newList = [...INITIAL_DATA];
    return newList.slice(0, limit);
  }

  function removeItem(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  useEffect(() => {
    console.log("pre-render");
  });

  useEffect(
    () => {
      console.log("list slice");
      setList(listSlice(limit));
    },
    [limit]
  );

  function addItem() {
    if (inputValue) {
      const lastValue = list.length ? list[list.length - 1] : 0;
      const newValue = () => {
        if (lastValue) {
          return {
            id: lastValue.id + 1,
            title: inputValue,
            url: inputValue
          };
        }
        return {
          id: 0,
          title: inputValue,
          url: inputValue
        };
      };
      setList([...list, newValue()]);
      setInput("");
    }
  }

  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return <ListItem key={item.id} item={item} index={index} removeItem={removeItem}/>;
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
      <button onClick={() => setLimit(limit + 500)}>Load More</button>
    </div>
  );
});

export default Counter;
