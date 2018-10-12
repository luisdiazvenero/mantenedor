import React, {Component} from 'react'
import Cabecera from './Cabecera'
import Lista from './Lista'

class ViewList extends Component {
  render(){
    const {handleClick, data} = this.props

    return(
      <div>
        <Cabecera/>
        <Lista data={data} handleClick={handleClick}/>
      </div>

    )
  }
}

export default ViewList
