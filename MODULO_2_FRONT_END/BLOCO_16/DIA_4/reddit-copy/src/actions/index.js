import subredditApi from "../servicers/subredditApi";

export const REQUEST_SUBREDDIT = "REQUEST_SUBREDDIT";
export const REQUEST_SUBREDDIT_SUCCESS = "REQUEST_SUBREDDIT_SUCCESS";
export const REQUEST_SUBREDDIT_ERROR = "REQUEST_SUBREDDIT_ERROR";

export const requestSubredditApi = () => ({
  type: REQUEST_SUBREDDIT,
  payload: {
    isFetching: true,
  },
});

export const requestSubredditApiSuccess = (reducer) => ({
  type: REQUEST_SUBREDDIT_SUCCESS,
  payload: {
    subreddit: reducer,
    isFetching: false,
  },
});

export const requestSubredditApiError = (error) => ({
  type: REQUEST_SUBREDDIT_ERROR,
  payload: {
    error,
    isFetching: false,
  },
});

export const fetchSubreddit = (reducer) => (dispatch) => {
  dispatch(requestSubredditApi());
  subredditApi(reducer)
    .then((res) => dispatch(requestSubredditApiSuccess(res)))
    .catch(() => dispatch(requestSubredditApiError("Não foi possível recuperar")));
};