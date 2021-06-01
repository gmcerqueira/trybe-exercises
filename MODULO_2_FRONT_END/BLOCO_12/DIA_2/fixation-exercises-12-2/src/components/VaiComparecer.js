import React, { Component } from 'react'

export class VaiComparecer extends Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <label htmlFor="vaiComparecer">
        Vai comparecer
        <input
          type="checkbox"
          name="vaiComparecer"
          value={value}
          onChange={handleChange}
        />
      </label>
    )
  }
}

export default VaiComparecer
