import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { Nav, NavItem, Jumbotron, Container } from "reactstrap";
import ApartmentIndex from "./ApartmentIndex";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Jumbotron fluid>
          <Container>
            <Nav>
              <NavItem>
                <NavLink
                  to="/apartmentindex"
                  href="/"
                  // style={{
                  //   alignContent: "center",
                  //   fontWeight: "bold",
                  //   color: "purple",
                  //   fontFamily: "sans-serif",
                  //   opacity: "0.4",
                  // }}
                >
                  <h1>Check out our available Apartments</h1>
                </NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
