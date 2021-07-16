import RandomProvider from './context/RandomProvider'
import RandomNumContainer from './components/RandomNumContainer'

function App() {
  return (
    <RandomProvider>
      <RandomNumContainer/>
    </RandomProvider>
  );
}

export default App;
