import React, { Component } from 'react';
import './App.css';
import LiveClock from '../src/LiveClock/LiveClock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LiveClock />
      </div>
    );
  }
}

export default App;
