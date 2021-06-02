import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../actions/index.js";
import { connect } from "react-redux";


class Login extends Component {
  render() {
    const { login, loginConfirm } = this.props;

    return login ? (
      <Redirect to="/" />
    ) : (
      <>
        <label htmlFor="name">
          Nome:
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" id="email" />
        </label>
        <button type="button" onClick={()=>loginConfirm()}>
          login
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginConfirm: () => dispatch(login()),
});

const mapStateToProps = (state) => (
  state.login
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

