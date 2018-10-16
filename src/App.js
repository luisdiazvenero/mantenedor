import React, { Component } from 'react';
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';

import { Card, Elevation } from "@blueprintjs/core";

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

  seleccionUsuario = id => {
    this.setState({
      ruta: 'formulario',
      usuarioSeleccionado: id
    })
  }

  agregarNuevoUsuario = usuario => {
    axios.post('https://jsonplaceholder.typicode.com/users', usuario)
    .then(({data}) => {
      const newData = this.state.data.concat(data)
      this.setState({
        data: newData,
        ruta: 'lista'
      })
    })
  }

  actualizarNuevoUsuario = (id, values) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
      .then(()=>{
        const newData = this.state.data.map(x => x.id === id ? values : x)
        this.setState({
          data: newData,
          ruta: 'lista'
        })
      })
  }

  nuevoUsuario = () => {
    this.setState({
      ruta: 'formulario',
      usuarioSeleccionado: undefined
    })
  }

  render() {

    const {ruta, data, usuarioSeleccionado} = this.state
    const valoresIniciales = usuarioSeleccionado && data.find(x => x.id === usuarioSeleccionado)



    return (
      <Card interactive={false} elevation={Elevation.TWO}>
        {ruta === 'lista' && <ViewList
          nuevoUsuario={this.nuevoUsuario}
          handleClick={this.seleccionUsuario}
          data={data}
        />}

        {ruta === 'formulario' && <UserForm
          valoresIniciales={valoresIniciales || {}}
          handleSubmit={this.agregarNuevoUsuario}
          handleUpdate={this.actualizarNuevoUsuario}
        />}
      </Card>

    );
  }
}

export default App;
