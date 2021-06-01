import React, { Component } from 'react'
import Pokemon from './Pokemon.js'
import Button from './Button'
import PropTypes from 'prop-types'
import './Pokedex.css'

class Pokedex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemonIndex: 0,
      filter: 'All'
    }

    this.nextPokemon = this.nextPokemon.bind(this)
    this.previousPokemon = this.previousPokemon.bind(this)
    this.filterType = this.filterType.bind(this)
    this.fetchFilteredPokemons = this.fetchFilteredPokemons.bind(this)
    this.selectTypes = this.selectTypes.bind(this)
  }

  nextPokemon(numPokemons) {
    this.setState(state => {
      return (state.pokemonIndex === numPokemons - 1)
        ? { pokemonIndex: 0 }
        : { pokemonIndex: state.pokemonIndex + 1 }
    }
    )
  }

  previousPokemon(numPokemons) {
    this.setState(state =>
      (state.pokemonIndex === 0)
        ? { pokemonIndex: numPokemons - 1 }
        : { pokemonIndex: state.pokemonIndex - 1 }
    )
  }

  filterType(filter) {
    this.setState(({ filter, pokemonIndex: 0 }))
  }

  fetchFilteredPokemons() {
    return this.props.pokemons.filter(pokemon => {
      if (this.state.filter === 'All') return true
      return pokemon.type === this.state.filter
    })
  }

  selectTypes(pokemons) {
    return pokemons.map(pokemon => pokemon.type).reduce((init, current) => {
      if (!init.includes(current)) {
        init.push(current);
      }
      return init;
    }, []);
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons()
    const numPokemons = filteredPokemons.length
    const types = this.selectTypes(this.props.pokemons)
    const { pokemonIndex } = this.state
    const pokemon = filteredPokemons[pokemonIndex]

    return (
      <div className="pokedex">
        <h1 className='pokedex-title'>My Pokedex</h1>
        <h3>{(pokemonIndex + 1)}/{numPokemons}</h3>
        <div className='pokedex-pokemon'>
          <Button className='nextBtn' onClick={() => { this.previousPokemon(numPokemons) }} text='Previous' disabled={filteredPokemons.length <= 1} />

          <Pokemon key={pokemon.id} pokemon={pokemon} />

          <Button className='previousBtn' onClick={() => { this.nextPokemon(numPokemons) }} text='Next' disabled={filteredPokemons.length <= 1} />
        </div>
        <h2>Filter selected: {this.state.filter}</h2>
        <h3>Pokemons available: {numPokemons}</h3>
        <Button className='filterAll' onClick={() => { this.filterType('All') }} text='All' />
        <div className="pokedex-filters">
          {types.map(type => (<Button key={type} className='filterBnt' onClick={() => { this.filterType(type) }} text={type} />))}
        </div>
      </div>
    )
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pokedex