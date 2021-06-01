import React, { Component } from 'react'

export class PokemonDetails extends Component {
  render() {
    const { pokemons, match: { params: { pokemonId } } } = this.props
    const { name, type, averageWeight: { value, measurementUnit }, image, summary, foundAt } = pokemons.find(pokemon => pokemon.id == pokemonId)

    return (
      <div>
        <div className='pokemon-container'>
          <img className='pokemon-image' src={image} alt='Pokemon' />
          <div className="pokemon-info">
            <h4 className='pokemon-title'>{name}</h4>
            <p className='pokemon-type'>Type: {type}</p>
            <p className='pokemon-wight'>Weight: {value} {measurementUnit}</p>
          </div>
        </div>
        <p>{summary}</p>
        {foundAt.map(({ location, map},index) => {
          return (
            <div key={index}>
              <h2>{location}</h2>
              <img src={map} alt="map" />
            </div>
          )
        })}
      </div>
    )
  }
}

export default PokemonDetails
