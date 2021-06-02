import { LOGIN } from "../actions";

const INITIAL_STATE = {
  login: false,
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default login;
