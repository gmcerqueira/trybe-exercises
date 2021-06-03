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
