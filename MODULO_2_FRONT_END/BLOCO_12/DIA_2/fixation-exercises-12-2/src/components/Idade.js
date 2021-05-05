import React, { Component } from 'react'

class Idade extends Component {

  render() {
    const { value, handleChange } = this.props

    

    return (
      <label htmlFor="idade">
        Idade
        <input
          type="number"
          name="idade"
          value={value}
          onChange={handleChange}
        />
      </label>
    )
  }
}

export default Idade
