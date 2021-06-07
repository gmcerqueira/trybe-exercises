import React from "react";
// importe o connect do pacote 'react-redux'
import { connect } from "react-redux";
// importe a ação oriunda do thunk
import { fetchSubreddit as fetchSubredditThunk } from "../actions";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      time: "",
    };
  }

  handleChange = (e) => {
    const { fetchSubreddit } = this.props;
    this.setState(
      {
        inputText: e.target.value,
        time: this.dateNow(),
      },
      () => fetchSubreddit(this.state.inputText)
    );
  };

  dateNow = () => {
    const date = new Date().toUTCString();
    return date;
  };

  render() {
    const { done } = this.props;
    return (
      <>
        <h1>Select a subreddit:</h1>
        <select onChange={this.handleChange} defaultValue='' placeholder="Enter Reducer">
          <option value="" disabled hidden></option>
          <option value="reactjs">reactjs</option>
          <option value="frontend">frontend</option>
        </select>
        <button onClick={this.handleChange}>refresh</button>
        {done ? <span>{this.state.time}</span> : ""}
      </>
    );
  }
}

// mapeie as ações despachadas como propriedade do componente
const mapStateToProps = (state) => ({
  done: state.subreddit.subreddit,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubreddit: (subreddit) => dispatch(fetchSubredditThunk(subreddit)),
});

// conecte as ações despachadas ao redux
export default connect(mapStateToProps, mapDispatchToProps)(Selector);
