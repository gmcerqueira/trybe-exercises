import {
  REQUEST_SUBREDDIT,
  REQUEST_SUBREDDIT_SUCCESS,
  REQUEST_SUBREDDIT_ERROR,
} from "../actions";

const INITIAL_SUBREDDIT_STATE = {
  subreddit: "",
  isFetching: false,
  error: "",
};

const subreddit = (state = INITIAL_SUBREDDIT_STATE, { type, payload }) => {
  switch (type) {
    case REQUEST_SUBREDDIT:
      return {
        ...state,
        isFetching: payload.isFetching,
      };

    case REQUEST_SUBREDDIT_SUCCESS:
      return {
        ...state,
        subreddit: payload.subreddit,
        isFetching: payload.isFetching,
        error: "",
      };

    case REQUEST_SUBREDDIT_ERROR:
      return {
        ...state,
        isFetching: payload.isFetching,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default subreddit;
