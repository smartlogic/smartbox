import React from 'react';
import { Button, UnstyledLink } from '@smartlogic/smartbox';
import logo from './logo.svg';
import './App.css';

function App() {
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
        <Button size='large' color='orange'>This is a Smartbox Button</Button>
      </header>
    </div>
  );
}

export default App;
