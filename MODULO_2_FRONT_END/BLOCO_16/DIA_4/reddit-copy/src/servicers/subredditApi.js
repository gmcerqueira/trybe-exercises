const APIURL = 'https://www.reddit.com/r/';

const subredditAPI = (subreddit) =>
  fetch(`${APIURL}${subreddit}.json`)
    .then((response) => response.json())
    .then((json) => json.data.children)


export default subredditAPI;
