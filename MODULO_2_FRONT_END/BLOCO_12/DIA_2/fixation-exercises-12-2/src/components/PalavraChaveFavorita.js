import React, { Component } from 'react'

export class PalavraChaveFavorita extends Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <label htmlFor="palavraChaveFavorita">
        <select
          name="palavraChaveFavorita"
          value={value}
          onChange={handleChange}
        >
          <option value="Componente">Componente</option>
          <option value="Estado">Estado</option>
          <option value="Evento">Evento</option>
          <option value="Props">Props</option>
        </select>
      </label>
    )
  }
}

export default PalavraChaveFavorita