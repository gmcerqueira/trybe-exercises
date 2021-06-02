import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return <NavLink to={"login"}>login</NavLink>;
  }
}
