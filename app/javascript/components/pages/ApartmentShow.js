import React, { Component } from "react";
import { Card, Button, CardTitle, Col, CardText, CardImg } from "reactstrap";
import { NavLink } from "react-router-dom";

class ApartmentShow extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.apartment && this.props.apartment.street}</h1>
        <Col sm="6">
          <Card>
            <CardImg
              top
              width="100%"
              src={this.props.apartment && this.props.apartment.img}
              alt="apartment picture"
            />
            {/* <CardTitle>
              {this.props.apartment && this.props.apartment.street}
            </CardTitle> */}
            <CardText>
              <br />
              <h3>Street</h3>{" "}
              {this.props.apartment && this.props.apartment.street}
              <br />
              <h3>City </h3> {this.props.apartment && this.props.apartment.city}
              <br />
              <h3>State</h3>{" "}
              {this.props.apartment && this.props.apartment.state}
              <br />
              <h3>Manager</h3>{" "}
              {this.props.apartment && this.props.apartment.manager}
              <br />
              <h3>Email</h3>{" "}
              {this.props.apartment && this.props.apartment.email}
              <br />
              <h3>Price</h3>{" "}
              {this.props.apartment && this.props.apartment.price}
              <br />
              <h3>Bedrooms</h3>{" "}
              {this.props.apartment && this.props.apartment.bedrooms}
              <br />
              <h3>Bathrooms</h3>{" "}
              {this.props.apartment && this.props.apartment.bathrooms}
              <br />
              <h3>pets</h3> {this.props.apartment && this.props.apartment.pets}
            </CardText>
          </Card>
        </Col>
        <NavLink to={`/devedit/${this.props.job && this.props.job.id}`}>
          <Button>Edit Job Profile</Button>
        </NavLink>
        <NavLink to={"/devindex"}>
          <Button onClick={() => this.props.deleteJob(job.id)}>
            Delete Job Profile
          </Button>
        </NavLink>
      </div>
    );
  }
}

export default ApartmentShow;
