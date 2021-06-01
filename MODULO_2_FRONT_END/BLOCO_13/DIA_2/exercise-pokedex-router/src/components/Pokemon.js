import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Pokemon.css'
import { Link } from 'react-router-dom'


class Pokemon extends Component {
  constructor(props) {
    super()
    const { pokemon } = props
    const { id, name, type, averageWeight, image } = pokemon
    const { value, measurementUnit } = averageWeight
    this.state = {
      id,
      name,
      type,
      image,
      value,
      measurementUnit,
    }

  }

  render() {
    const { id, name, type, image, value, measurementUnit } = this.state
    return (<div>

      <div className='pokemon-container'>
        <img className='pokemon-image' src={image} alt='Pokemon' />
        <div className="pokemon-info">
          <h4 className='pokemon-title'>{name}</h4>
          <p className='pokemon-type'>Type: {type}</p>
          <p className='pokemon-wight'>Weight: {value} {measurementUnit}</p>
        </div>
      </div>
      <Link to={`/pokemons/${id}`}>MORE INFO</Link>
    </div>
    )
  }

}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default Pokemon