import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col, CardImg } from "reactstrap";

class ApartmentIndex extends Component {
  render() {
    return (
      <div className="page-body">
        <h1> See our Apartments</h1>
        <Col sm="6">
          {this.props.apartments &&
            this.props.apartments.map((apartment) => {
              return (
                <Card
                  className="indexCards"
                  style={{
                    backgroundColor: "#333",
                    borderColor: "#989",
                    height: "130px",
                    width: "500px",
                    borderRadius: "100px 10px ",
                    fontFamily: "sans-serif",
                    fontSize: "35px",
                    textAlign: "center",
                    padding: "95px",
                    margin: "2px",
                  }}
                  body
                  key={apartment.id}
                >
                  <CardTitle>
                    <NavLink
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontFamily: "sans-serif",
                        fontSize: "30px",
                      }}
                      to={`/apartmentshow/${apartment.id}`}
                    >
                      {apartment.street}
                    </NavLink>
                  </CardTitle>
                </Card>
              );
            })}
        </Col>
      </div>
    );
  }
}

export default ApartmentIndex;
