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
    const {ruta} = this.state

    return (
      <div className="App">
        {ruta === 'lista' && <ViewList/>}
        {ruta === 'formulario' && <UserForm/>}
      </div>
    );
  }
}

export default App;
