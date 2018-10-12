import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import UserForm from './components/UserForm'
import ViewList from './components/ViewList'

class App extends Component {
  state={
    data: [],
    ruta: 'lista',
  }

  constructor(){
    super()
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({data}) => this.setState({data}))
  }

  render() {

    const {ruta, data} = this.state

    return (
      <div className="App">
        {ruta === 'lista' && <ViewList data={data}/>}
        {ruta === 'formulario' && <UserForm/>}
      </div>
    );
  }
}

export default App;
