import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

class ApartmentEdit extends Component {
  constructor(props) {
    super(props);
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
        user_id: this.props.user.id,
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
    this.props.updateApartment(this.state.form, this.props.apartment.id);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="page-body">
        <h1>this is the edit page</h1>
        <Form>
          <FormGroup>
            <Label for="street">Street</Label>
            <Input
              type="text"
              name="street"
              onChange={this.handleChange}
              value={this.state.form.street}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.form.city}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="state"> State</Label>
            <Input
              type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.form.state}
            />
          </FormGroup>
          <FormGroup>
            <Label for="manager">Manager</Label>
            <Input
              type="text"
              name="manager"
              onChange={this.handleChange}
              value={this.state.form.manager}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email"> Manager's Email</Label>
            <Input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.form.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price"> price</Label>
            <Input
              type="text"
              name="price"
              onChange={this.handleChange}
              value={this.state.form.price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms"> Bedrooms</Label>
            <Input
              type="integer"
              name="bedrooms"
              onChange={this.handleChange}
              value={this.state.form.bedrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bathrooms"> Bathrooms </Label>
            <Input
              type="integer"
              name="bathrooms"
              onChange={this.handleChange}
              value={this.state.form.bathrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pets"> Pets</Label>
            <Input
              type="text"
              name="pets"
              onChange={this.handleChange}
              value={this.state.form.pets}
            />
          </FormGroup>
          <FormGroup>
            <Label for="img"> Apartment Picture</Label>
            <Input
              type="text"
              name="img"
              onChange={this.handleChange}
              value={this.state.form.img}
            />
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
            Edit Apartment
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/apartmentindex" />}
      </div>
    );
  }
}
export default ApartmentEdit;
