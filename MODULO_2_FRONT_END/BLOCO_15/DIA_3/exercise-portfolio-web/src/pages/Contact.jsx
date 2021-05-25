import React from "react";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <Link to={{ pathname: "https://github.com/gmcerqueira" }} target="_blank">
        GitHub
      </Link>
    );
  }
}

export default Contact;
