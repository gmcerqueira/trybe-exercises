_Checklist do react-redux_

- [ ] npx create-react-app my-app-redux;
- [ ] npm install --save redux react-redux redux-thunk;
- [ ] npm install.

_**Dica:** utilize o comando abaixo para fazer os três comandos de uma única vez_

```bash
npx create-react-app my-app-redux && cd my-app-redux && npm install --save redux react-redux redux-thunk && npm install
```

_Criar dentro do diretório src:_

- [ ] diretório actions;
- [ ] diretório reducers;
- [ ] diretório store;
- [ ] diretório components.

_**Dica:** já na pasta da aplicação utilize o comando abaixo para criar as quatro pastas de um vez_

```bash
cd src && mkdir actions reducers store components && cd ..
```

_Criar dentro de actions,reducers e store :_

- [ ] arquivo index.js.

_Criar dentro de components:_

- [ ] arquivo SearchForm.js.
- [ ] arquivo CharacterInfo.js.

_**Dica:** na pasta da aplicação utilize o comando abaixo para criar todos os arquivos de um vez_

```bash
cd src/actions && touch index.js && cd ../reducers && touch index.js && cd ../store && touch index.js && cd ../components && touch SearchForm.js CharacterInfo.js && cd ../../
```

_No arquivo src/App.js:_

```js
// src/App.js
import React from "react";
import SearchForm from "./components/SearchForm";
import CharacterInfo from "./components/CharacterInfo";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <CharacterInfo />
    </div>
  );
}

export default App;
```

_No arquivo src/index.js:_

- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados à todos os componentes encapsulados em `<App />`.

```js
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

_No arquivo store/index.js:_

- [ ] importar o rootReducer e criar a store
- [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)

```javascript
// store/index.js:
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const composeWithDevTools =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : (...args) => {
        if (args.length === 0) return undefined;
        if (typeof args[0] === "object") return compose;
        return compose(...args);
      };

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
```

_Na pasta reducers:_

- [ ] criar os reducers necessários

```javascript
// src/reducers/charInfo.js
import {
  REQUEST_CHAR,
  REQUEST_CHAR_SUCCESS,
  REQUEST_CHAR_ERROR,
} from "../actions";

const INITIAL_CHAR_STATE = {
  isFetching: false,
  char: "",
  error: "",
};

const charInfo = (state = INITIAL_CHAR_STATE, { type, payload }) => {
  switch (type) {
    case REQUEST_CHAR:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    case REQUEST_CHAR_SUCCESS:
      return {
        ...state,
        char: payload.char,
        isFetching: payload.isFetching,
        error: "",
      };

    case REQUEST_CHAR_ERROR:
      return {
        ...state,
        error: payload.error,
        isFetching: payload.isFetching,
      };

    default:
      return state;
  }
};

export default charInfo;
```

- [ ] configurar os exports do arquivo index.js

```js
// src/reducers/index.js
import { combineReducers } from "redux";
import charInfo from "./charInfo.js";

const rootReducer = combineReducers({
  charInfo,
});

export default rootReducer;
```

_Na pasta actions:_

- [ ] criar os actionTypes

```js
// src/actions/index.js
export const REQUEST_CHAR = "REQUEST_CHAR";
export const REQUEST_CHAR_SUCCESS = "REQUEST_CHAR_SUCCESS";
export const REQUEST_CHAR_ERROR = "REQUEST_CHAR_ERROR";
```

- [ ] criar as actions necessárias

```js
// src/services/charApi.js
const APIURL = "https://anapioficeandfire.com/api/characters?name=";

const charAPI = (char) =>
  fetch(`${APIURL}${char.split().join("+")}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.length !== 0) return json[0];
      throw "Não foi possível realizar a busca";
    });

export default charAPI;
```

```js
// src/actions/index.js
import charAPI from "../services/charAPI";

export const REQUEST_CHAR = "REQUEST_CHAR";
export const REQUEST_CHAR_SUCCESS = "REQUEST_CHAR_SUCCESS";
export const REQUEST_CHAR_ERROR = "REQUEST_CHAR_ERROR";

export const requestChar = () => ({
  type: REQUEST_CHAR,
  payload: {
    isFetching: true,
  },
});

export const requestCharSuccess = (char) => ({
  type: REQUEST_CHAR_SUCCESS,
  payload: {
    char: char,
    isFetching: false,
  },
});

export const requestCharError = (error) => ({
  type: REQUEST_CHAR_ERROR,
  payload: {
    error,
    isFetching: false,
  },
});

export const fetchChar = (char) => (dispatch) => {
  dispatch(requestChar());
  charAPI(char)
    .then((res) => dispatch(requestCharSuccess(res)))
    .catch((error) => dispatch(requestCharError(error)));
};
```

_Nos componentes:_

- [ ] criar a função mapStateToProps
- [ ] fazer o connect

```js
// src/components/CharacterInfo.js
import React from "react";
// importe o connect do 'react-redux';
import { connect } from "react-redux";

class CharacterInfo extends React.Component {
  render() {
    //faça a desestruturação das props aqui
    const { loading, character, error } = this.props;
    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>
            Aliases:{" "}
            {character.aliases.map((alias, index) => (
              <p key={`${alias}-${index}`}>{alias}</p>
            ))}
          </li>
          <li>
            Books:{" "}
            {character.books.map((book, index) => (
              <p key={`${book}-${index}`}>{book}</p>
            ))}
          </li>
        </ul>
      );
    }
    if (error) {
      return <div>{error}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>Type a character name and click to search!</div>;
  }
}

//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = (state) => ({
  character: state.charInfo.char,
  loading: state.charInfo.isFetching,
  error: state.charInfo.error,
});

// conecte este componente ao redux aqui
export default connect(mapStateToProps, null)(CharacterInfo);
```

- [ ] criar a função mapDispatchToProps
- [ ] fazer o connect

```js
// src/components/SearchForm.js
import React from "react";
// importe o connect do pacote 'react-redux'
import { connect } from "react-redux";
import propTypes from "prop-types";
// importe a ação oriunda do thunk
import { fetchChar as fetchCharThunk } from "../actions";
import "./SearchForm.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      characterSearched: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
      characterSearched: "",
    });
  }

  submitName(e) {
    e.preventDefault();
    const { inputText } = this.state;
    if (!inputText) return;
    //desestruture a ação do thunk como propriedade aqui
    const { fetchChar } = this.props;
    this.setState(
      {
        inputText: "",
        characterSearched: inputText,
      },
      () => fetchChar(this.state.characterSearched)
    );
    // insira a action a ser despachada para o thunk
  }

  render() {
    const { inputText } = this.state;
    return (
      <div>
        <form onSubmit={this.submitName}>
          <h1>Type a character below:</h1>
          <input
            onChange={this.handleChange}
            placeholder="Enter Character"
            value={inputText}
          />
          <div className="buttonSection">
            <button className="submitButton" type="submit">
              Search!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// mapeie as ações despachadas como propriedade do componente
const mapDispatchToProps = (dispatch) => ({
  fetchChar: (char) => dispatch(fetchCharThunk(char)),
});

// conecte as ações despachadas ao redux
export default connect(null, mapDispatchToProps)(SearchForm);
```

\* Os exemplos dos conteúdos dos arquivos aqui citados foram fornecidos no módulo de Front-end, bloco 16, Gerenciamento de estado com Redux do curso ministrado pela Trybe
