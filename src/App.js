import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Pure from './Pure';

class App extends Component {
  state = {
    number: 0,
  }

  setNumber = () => {
    this.setState({ number: this.state.number +1 });
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Counter />
        <div>
            <span>App clicked: {this.state.number}</span>
            <button onClick={this.setNumber}>App counter</button>
        </div>
        <Pure />
      </div>
    );
  }
}

export default App;
