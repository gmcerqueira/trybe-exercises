import React from "react";
import profile from "../images/profile.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="profile">
        <h2 className="profile-name">Gustavo Cerqueira</h2>
        <img className="profile-image" src={profile} alt="profile image" />
      </div>
    );
  }
}

export default Home;
