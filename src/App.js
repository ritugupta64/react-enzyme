import React, { Component } from 'react';

import './App.css';

import Counter from "./counter";

class App extends Component {


  render() {
    return (
      <div className="App">
       <p>first test message</p>
      <Counter />
      </div>
    );
  }
}

export default App;
