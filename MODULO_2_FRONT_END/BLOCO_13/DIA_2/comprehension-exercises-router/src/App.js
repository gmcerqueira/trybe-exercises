import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Users from './components/Users.js';
import About from './components/About.js';
import StrictAccess from './components/StrictAccess.js';


class App extends Component {
  render() {
    return (
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/about'>about</Link>
        <Link to='/strict-access'>Strict Access</Link>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route path="/strict-access" render={() => <StrictAccess  user={{username:'joao', password: "1234"}} />} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
