import './App.css';
import pokemons from './components/data.js';
import Pokedex from './components/Pokedex.js';

function App() {
  return (
    <div className="App">
      <Pokedex pokemonsData={pokemons} />
    </div>
  );
}

export default App;
