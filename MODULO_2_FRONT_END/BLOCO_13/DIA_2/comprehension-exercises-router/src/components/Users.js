import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingMessage = 'Hi There', match: { params: { id } } } = this.props
    return (
      <div>
        <h2>Users</h2>
        <p>{greetingMessage}, this is my awesome Users component</p>
        <p>ID: {id}</p>
      </div>
    );
  }
};

export default Users;
