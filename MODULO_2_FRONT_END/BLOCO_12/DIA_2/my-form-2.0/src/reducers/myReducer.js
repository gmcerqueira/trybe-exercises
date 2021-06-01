const INITIAL_STATE = {
  nameInput: "",
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { nameInput: action.nameInput };
    default:
      return state;
  }
}

export default myReducer;
