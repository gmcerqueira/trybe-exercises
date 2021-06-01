import React, { Component } from 'react'
import './Button.css'

class Button extends Component {

  render() {
    const { className, onClick, text, disabled } = this.props
    return (
      <button className={`pokedexBtn ${className}`} onClick={onClick} disabled={disabled}>{text}</button>
    )
  }
}

export default Button