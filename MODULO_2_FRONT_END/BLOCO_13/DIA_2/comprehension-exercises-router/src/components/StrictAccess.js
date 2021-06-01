import React, { Component } from 'react'
import { Redirect } from 'react-router'

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.user
    if (username === 'joao' && password === '1234')
      return (<p>Welcome {username}</p>)

    alert('Access denied')
    return (<Redirect to="/" />)
  }
}

export default StrictAccess
