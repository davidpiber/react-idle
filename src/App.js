import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdleTimeout from './IdleTimeout';

class App extends Component {

  testFunction() {
    alert('test');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <IdleTimeout 
           timeout={5000}
           onTimeout= {this.testFunction}
           events= {['mousedown','keydown']}
           elementId={'root'} />
      </div>
    );
  }
}

export default App;
