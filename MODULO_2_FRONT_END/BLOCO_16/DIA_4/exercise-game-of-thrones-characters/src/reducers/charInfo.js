import {
  REQUEST_CHAR,
  REQUEST_CHAR_SUCCESS,
  REQUEST_CHAR_ERROR,
} from "../actions";

const INITIAL_CHAR_STATE = {
  isFetching: false,
  char:'',
  error:'',
}

const charInfo = (state = INITIAL_CHAR_STATE, {type,payload}) => {
  switch (type) {
    case REQUEST_CHAR:
      return {
        ...state,
        isFetching: payload.isFetching,
      }

    case REQUEST_CHAR_SUCCESS:
      return {
        ...state,
        char: payload.char,
        isFetching: payload.isFetching,
        error:''
      }

    case REQUEST_CHAR_ERROR:
      return {
        ...state,
        error: payload.error,
        isFetching: payload.isFetching,
      }
  
    default:
      return state
  }
}

export default charInfo;