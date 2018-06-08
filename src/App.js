import React, { Component } from 'react';
import './App.css';
import Navigation from './nav/Navigation';
import Main from './main/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;