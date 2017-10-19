import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>

        <Alert color="primary">
                This is a primary alert — check it out!
              </Alert>
      </div>
    );
  }
}

export default App;
