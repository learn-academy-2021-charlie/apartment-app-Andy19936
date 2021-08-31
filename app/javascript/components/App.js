import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartmentindex" component={ApartmentIndex} />
          <Route path="/apartmentshow/:id" />
        </Switch>
      </Router>
    );
  }
}

export default App;
