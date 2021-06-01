import React, { Component } from 'react'

class EstadoFavorito extends Component {

  render() {
    const { value, handleChange, handleErros } = this.props

    if (value.length > 120) handleErros()
    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea name="estadoFavorito"
          value={value}
          onChange={handleChange}
        />
      </label>
    )
  }
}

export default EstadoFavorito
