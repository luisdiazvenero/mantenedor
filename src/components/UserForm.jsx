import React, {Component} from 'react'

//validaciones de campos de formulario
const validate = values => {
  const errors = {}
  if(!values.name) {
    errors.name = 'Este campo es obligatorio'
  }
  if(!values.email) {
    errors.email = 'Este campo es obligatorio'
  }
  if(!values.website) {
    errors.website = 'Este campo es obligatorio'
  }
  return errors
}

class UserForm extends Component {
  state={
    errors: {}
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]:target.value
    })

  }

  handleSubmit = e => {
    e.preventDefault()
    const {errors, ...sinErrors} = this.state
    const result = validate(sinErrors)
    this.setState({errors: result})

    if(!Object.keys(result).length){
      const {handleSubmit} = this.props
      handleSubmit(sinErrors)
      // envio de formulario
      e.target.reset()
    }

  }

  render(){
    const{errors} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Nombre" name="name" onChange={this.handleChange}></input>
        {errors.name && <p>{errors.name}</p>}

        <input placeholder="Email" name="email" onChange={this.handleChange}></input>
        {errors.email && <p>{errors.email}</p>}

        <input placeholder="Website" name="website" onChange={this.handleChange}></input>
        {errors.website && <p>{errors.website}</p>}

        <input type="submit" value="Enviar" />
      </form>
    )
  }
}

export default UserForm
