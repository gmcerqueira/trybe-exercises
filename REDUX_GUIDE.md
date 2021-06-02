_Checklist do react-redux_

- [ ] npx create-react-app my-app-redux;
- [ ] npm install --save redux react-redux;
- [ ] npm install.

_**Dica:** utilize o comando abaixo para fazer os três passos de uma única vez_

```bash
npx create-react-app my-app-redux && cd my-app-redux && npm install --save redux react-redux && npm install
```

_Criar dentro do diretório src:_

- [ ] diretório actions;
- [ ] diretório reducers;
- [ ] diretório store.

_**Dica:** já na pasta da aplicação utilize o comando abaixo para criar as três pastas de um vez_

```bash
cd src && mkdir actions reducers store && cd ..
```

_Criar dentro de cada diretório criado:_

- [ ] arquivo index.js.

_**Dica:** na pasta da aplicação utilize o comando abaixo para criar os três arquivos de um vez_

```bash
cd src/actions && touch index.js && cd ../reducers && touch index.js && cd ../store && touch index.js && cd ../../
```

_No arquivo App.js:_

- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados à todos os componentes encapsulados em `<App />`.

```js
// src/App.js
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
import { createStore, compose } from "redux";
import rootReducer from "../reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

_Na pasta reducers:_

- [ ] criar os reducers necessários

```javascript
// src/reducers/exemploDeReducer.js
const INITIAL_STATE = {
  state: "",
};

function exemploDeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NEW_ACTION":
      return { state: action.state };
    default:
      return state;
  }
}

export default exemploDeReducer;
```

- [ ] configurar os exports do arquivo index.js

```js
// src/reducers/index.js
import { combineReducers } from "redux";
import myReducer from "./myReducer";

const rootReducer = combineReducers({ myReducer });

export default rootReducer;
```

_Na pasta actions:_

- [ ] criar os actionTypes

```js
// src/actions/index.js
const NEW_ACTION = "NEW_ACTION";
const OLD_ACTION = "OLD_ACTION";
```

- [ ] criar as actions necessárias

```js
// src/actions/index.js
const NEW_ACTION = "NEW_ACTION";
const OLD_ACTION = "OLD_ACTION";

export const newAction = (state) => ({ type: NEW_ACTION, state });

export const newAction = (state) => ({ type: OLD_ACTION, state });
```

_Nos componentes:_

- [ ] criar a função mapStateToProps
- [ ] fazer o connect

```js
// FirstComponent.js
import React from "react";
import { connect } from "react-redux";
import { newAction } from "./actions";

class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anyState: "" };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.setState({ anyState: event.target.value })}
        />
        <button onClick={() => this.props.myFirstDispatch(this.state.anyState)}>
          Executar qualquer tarefa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (state) => dispatch(newAction(state)),
});

export default connect(null, mapDispatchToProps)(FirstComponent);
```

- [ ] criar a função mapDispatchToProps
- [ ] fazer o connect

```js
// SecondComponent.js
import React from "react";
import { connect } from "react-redux";

class SecondComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.myFirstState.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myFirstState: state.myReducer.state,
});

export default connect(mapStateToProps, null)(SecondComponent);
```

\* Os exemplos dos conteúdos dos arquivos aqui citados foram fornecidos no módulo de Front-end, bloco 16, Gerenciamento de estado com Redux do curso ministrado pela Trybe
