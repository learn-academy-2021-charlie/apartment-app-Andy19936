import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

class ApartmentNew extends Component {
  constructor(props) {
    this.state = {
      form: {
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedrooms: 0,
        bathrooms: 0,
        pets: "",
        img: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };
  handleSubmit = (e) => {
    
  }
  render() {
    return (
      <div>
        <h1>this is the new page</h1>
      </div>
    );
  }
}

export default ApartmentNew;
