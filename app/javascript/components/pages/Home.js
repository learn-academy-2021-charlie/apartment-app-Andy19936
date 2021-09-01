import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import ApartmentIndex from "./ApartmentIndex";

class Home extends Component {
  render() {
    return (
      <div className="page-body">
        <h1>this is the home page</h1>
        <Nav>
          <NavItem>
            <NavLink to="/apartmentindex">
              Check out our available Apartments
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Home;
