import React from "react";
// importe o connect do 'react-redux';
import { connect } from "react-redux";

class Subreddit extends React.Component {
  render() {
    //faça a desestruturação das props aqui
    const { loading, subreddit, error } = this.props;
    if (!loading && subreddit) {
      return (
        <ul>
          {subreddit.map(({ data: { title } }, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      );
    }
    if (error) {
      return <div>{error}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>Waiting on subreddit</div>;
  }
}

//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = (state) => ({
  subreddit: state.subreddit.subreddit,
  loading: state.subreddit.isFetching,
  error: state.subreddit.error,
});

// conecte este componente ao redux aqui
export default connect(mapStateToProps, null)(Subreddit);
