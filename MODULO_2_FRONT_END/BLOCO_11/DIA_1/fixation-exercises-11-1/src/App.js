import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const commitments = ['14:00 - Abertura', '14:30 - Conteúdo', '16:20 - Aula ao vivo', '18:00 - Exercícios', '19:30 - Forms', '19:40 - Fechamento']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {commitments.map(commitment => task(commitment))}
      </header>
    </div>
  );
}

export default App;
