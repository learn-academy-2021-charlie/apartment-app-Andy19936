import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col, CardImg } from "reactstrap";

class ApartmentIndex extends Component {
  render() {
    console.log(this.props.apartments);
    return (
      <div className="page-body">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1> See our Apartments</h1>
        <Col sm="6">
          {this.props.apartments &&
            this.props.apartments.map((apartment) => {
              return (
                <Card
                  className="indexCards"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    backgroundColor: "#333",
                    borderColor: "#989",
                    height: "130px",
                    width: "500px",
                    borderRadius: "80px 100px ",
                    fontFamily: "sans-serif",
                    fontSize: "35px",
                    textAlign: "center",
                    padding: "95px",
                    margin: "2px",
                  }}
                  body
                  key={apartment.id}
                >
                  <CardImg
                    top
                    width="100%"
                    src={apartment.img}
                    alt="apartment picture"
                  />
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
