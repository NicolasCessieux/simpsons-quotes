import React, { Component } from 'react';
import './App.css';

import QuotesInBody from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Lamp on />
        <Lamp />
        <QuotesInBody />

      </div>
    );
  }
}

export default App;
