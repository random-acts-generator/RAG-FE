import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import { getData } from "../actions";

import "../styles/index.css";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("data")) {
      this.props.getData(JSON.parse(localStorage.getItem("data")));
    }
  }
  render() {
    return (
      <Router>
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={RegistrationForm} />
        <PrivateRoute exact path="/homepage" component={HomePage} />
      </Router>
    );
  }
}

export default connect(
  null,
  { getData }
)(App);
