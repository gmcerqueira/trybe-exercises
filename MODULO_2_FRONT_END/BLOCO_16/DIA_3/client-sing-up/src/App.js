import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
