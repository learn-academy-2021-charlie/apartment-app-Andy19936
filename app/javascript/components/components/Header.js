import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h4>ApartmentFinder</h4>
        {this.props.routes && this.props.routes.logged_in && (
          <div>
            <h1>{this.props.routes.current_user.email}</h1>
            <a href={this.props.routes.sign_out_route}>Sign Out</a>
          </div>
        )}
        {this.props.routes && !this.props.routes.logged_in && (
          <div>
            <a href={this.props.routes.sign_in_route}>Sign In</a>
          </div>
        )}
        {this.props.routes && this.props.routes.logged_in && (
          <div className="add-apartment">
            <a href="/apartmentnew"> Add An Apartment</a>
          </div>
        )}
      </div>
    );
  }
}
export default Header;
