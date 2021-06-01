import { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { PersonalData } from "./components/PersonalData.js";
import store from "./store/index.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [
        { id: "nome", textLabel: "Nome" },
        { id: "email", textLabel: "Email" },
        { id: "cpf", textLabel: "CPF" },
        { id: "endereço", textLabel: "Endereço" },
        { id: "cidade", textLabel: "Cidade" },
      ],

     
    };
  }

  render() {
    const { inputs } = this.state;
    return (
        <Provider store={ store }>
        
        <PersonalData inputsText={inputs} />
        </Provider>
    );
  }
}

export default App;
