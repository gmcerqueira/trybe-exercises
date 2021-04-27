import React, { Component } from 'react'
import Pokemon from './Pokemon.js'
import PropTypes from 'prop-types'
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    const { pokemonsData } = this.props
    return (
      <div className="pokedex">
        <h1 className='pokedex-title'>My Pokedex</h1>
        <div className='pokedex-pokemons'>
          {pokemonsData.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
      </div>
    )
  }
}

Pokedex.propTypes = {
  pokemonsData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pokedex