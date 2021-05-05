import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito.js';
import './Form.css'
import PalavraChaveFavorita from './PalavraChaveFavorita.js';
import VaiComparecer from './VaiComparecer.js';
import Idade from './Idade.js';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleErros = this.handleErros.bind(this);

    this.state = {
      estadoFavorito: '',
      email: '',
      nome: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
      avatar: '',
      formularioComErros: false
    };
  }

  errorState = (bool) => { this.setState({ formularioComErros: bool }) }

  handleErros(name, value) {
    switch (name) {
      case 'nome':
        this.errorState(value.length <= 3)
        break;

      case 'idade':
        this.errorState(value <= 0)
        break;

      case 'vaiComparecer':
        console.log(value);
        this.errorState(!value)
        break;

      default:
        break;
    }

  }
  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value
    this.setState({
      [name]: value,
    });
    this.handleErros(name, value)
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <legend>Suas informações</legend>

            <label htmlFor="nome">
              Nome
            <input
                name="nome"
                type="text"
                value={this.state.nome}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="email">
              Email
            <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>

            <Idade
              value={this.state.idade}
              handleChange={this.handleChange}
            />

            <label htmlFor="avatar">
              Foto perfil
            <input
                type="file"
                name="avatar"
                value={this.state.avatar}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <EstadoFavorito
            value={this.state.estadoFavorito}
            handleChange={this.handleChange}
          />

          <VaiComparecer
            value={this.state.vaiComparecer}
            handleChange={this.handleChange}
          />

          <PalavraChaveFavorita
            value={this.state.palavraChaveFavorita}
            handleChange={this.handleChange}
          />

        </form>
      </div>
    )
  }
}

export default Form;