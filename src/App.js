import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserForm from './components/UserForm'
import ViewList from './components/ViewList'

class App extends Component {
  state={
    ruta: 'lista',
  }
  render() {
    return (
      <div className="App">
        <ViewList/>
        <UserForm/>
      </div>
    );
  }
}

export default App;
