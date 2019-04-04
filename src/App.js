import React, { Component } from 'react';
import './App.css';

import QuotesInBody from "./Quotes";
import Lamp from "./Lamp";
import Working from "./Working";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Working on />
        </header>

        <Lamp on />
        <Lamp />
        <QuotesInBody />

      </div>
    );
  }
}

export default App;
