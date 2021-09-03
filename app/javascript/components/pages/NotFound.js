import React, { Component } from "react";
import { NavLink } from "reactstrap";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <NavLink
          href="/"
          style={{
            fontWeight: "bold",
            color: "purple",
            fontFamily: "sans-serif",
            opacity: "0.4"
          }}
        >
          <h1>4</h1>
          <h1>0</h1>
          <h1>4</h1>
        </NavLink>
      </div>
    );
  }
}

export default NotFound;
