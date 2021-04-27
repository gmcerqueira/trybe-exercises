import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Pokemon.css'

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props
    const { name, type, averageWeight, image } = pokemon
    const { value, measurementUnit } = averageWeight
    return (
      <div className='pokemon-container'>
        <img className='pokemon-image' src={image} alt='Pokemon' />
        <div className="pokemon-info">
          <h4 className='pokemon-title'>{name}</h4>
          <p className='pokemon-type'>Type: {type}</p>
          <p className='pokemon-wight'>Weight: {value} {measurementUnit}</p>
        </div>
      </div>
    )
  }

}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default Pokemon