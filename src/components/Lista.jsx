import React, {Component} from 'react'

class Lista extends Component {
  render(){
    const {data} = this.props

    return(
      <ul>
        {data.map(x=>
          <li key={x.id}> {x.name} <button>Editar</button></li>
        )}
      </ul>
    )
  }
}

export default Lista
