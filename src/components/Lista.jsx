import React, {Component} from 'react'

class Lista extends Component {
  handleClick = id => e => {
    const {handleClick} = this.props
    handleClick(id)
  }

  render(){
    const {data} = this.props

    return(
      <ul>
        {data.map(x=>
          <li key={x.id}> {x.name} <button onClick={this.handleClick(x.id)}>Editar</button></li>
        )}
      </ul>
    )
  }
}

export default Lista
