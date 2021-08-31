import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <Router>
        <Header routes={this.props} />
        <h1>hello world</h1>
      </Router>
    );
  }
}

export default App;
