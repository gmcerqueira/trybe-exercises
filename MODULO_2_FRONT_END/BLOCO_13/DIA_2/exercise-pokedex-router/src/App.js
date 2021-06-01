import './App.css';
import React, { Component } from 'react';
import pokemons from './components/data.js';
import Pokedex from './components/Pokedex.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails.js';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
            <Link to='/'>Home</Link>
          <Switch>
            <Route path='/pokemons/:pokemonId' render={(props) => <PokemonDetails pokemons={pokemons} {...props}/>}/>
            <Route path='/' render={() => <Pokedex pokemons={pokemons} />}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
