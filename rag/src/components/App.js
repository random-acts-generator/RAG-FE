import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

import "../styles/index.css";

function App() {
  return (
    <Router>
      <Route path="/login" component={LoginForm} />
      <Route exact path="/homepage" component={HomePage} />
      <Route exact path="/register" component={RegistrationForm} />
    </Router>
  );
}

export default App;
