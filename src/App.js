import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import TopBar from './components/TopBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Home />
      </div>
    );
  }
}

export default App;
