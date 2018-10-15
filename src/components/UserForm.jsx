import React, {Component} from 'react'

class UserForm extends Component {
  state={}

  handleChange = ({target}) => {
    this.setState({
      [target.name]:target.value
    })

  }
  render(){
    console.log(this.state)
    return(
      <form>
        <input name="name" onChange={this.handleChange}></input>
        <input name="email" onChange={this.handleChange}></input>
        <input name="website" onChange={this.handleChange}></input>
      </form>
    )
  }
}

export default UserForm
