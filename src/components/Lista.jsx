import React, {Component} from 'react'
import { Button, UL } from "@blueprintjs/core"

class Lista extends Component {
  handleClick = id => e => {
    const {handleClick} = this.props
    handleClick(id)
  }

  render(){
    const {data} = this.props

    return(
      <UL className="Classes.LIST">
        {data.map(x=>
          <li key={x.id}> {x.name}
            <Button icon="user" text="Editar" onClick={this.handleClick(x.id)}/>

          </li>
        )}
      </UL>
    )
  }
}

export default Lista
