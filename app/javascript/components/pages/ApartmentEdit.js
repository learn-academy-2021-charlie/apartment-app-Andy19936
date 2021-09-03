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
      loaded: false,
    };
  }
  componentDidUpdate = () => {
    if (this.state.loaded === false) {
      this.setState({
        form: {
          street: this.props.apartment.street,
          city: this.props.apartment.city,
          state: this.props.apartment.state,
          manager: this.props.apartment.manager,
          email: this.props.apartment.email,
          price: this.props.apartment.price,
          bedrooms: this.props.apartment.bedrooms,
          bathrooms: this.props.apartment.bathrooms,
          pets: this.props.apartment.pets,
          img: this.props.apartment.img,
          user_id: this.props.user.id,
        },
        loaded: true,
      });
    }
  };

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
    console.log(this.props);
    return (
      <div className="page-body">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>this is the edit page</h1>
        {this.props.apartment && (
          <Form>
            <FormGroup>
              <Label for="street">Street</Label>
              <Input
                type="text"
                name="street"
                onChange={this.handleChange}
                defaultValue={this.props.apartment.street}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                onChange={this.handleChange}
                defaultValue={this.props.apartment.city}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="state"> State</Label>
              <Input
                type="text"
                name="state"
                onChange={this.handleChange}
                defaultValue={this.props.apartment.state}
              />
            </FormGroup>
            <FormGroup>
              <Label for="manager">Manager</Label>
              <Input
                type="text"
                name="manager"
                onChange={this.handleChange}
                defaultValue={this.props.apartment.manager}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email"> Manager's Email</Label>
              <Input
                type="text"
                name="email"
                onChange={this.handleChange}
                defaultValue={this.props.apartment.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price"> price</Label>
              <Input
                type="text"
                name="price"
                onChange={this.handleChange}
                defaultValue={this.props.apartment.price}
              />
            </FormGroup>
            <FormGroup>
              <Label for="bedrooms"> Bedrooms</Label>
              <Input
                type="integer"
                name="bedrooms"
                onChange={this.handleChange}
                defaultValue={this.props.apartment.bedrooms}
              />
            </FormGroup>
            <FormGroup>
              <Label for="bathrooms"> Bathrooms </Label>
              <Input
                type="integer"
                name="bathrooms"
                onChange={this.handleChange}
                defaultValue={this.props.apartment.bathrooms}
              />
            </FormGroup>
            <FormGroup>
              <Label for="pets"> Pets</Label>
              <Input
                type="text"
                name="pets"
                onChange={this.handleChange}
                defaultValue={this.props.apartment.pets}
              />
            </FormGroup>
            <FormGroup>
              <Label for="img"> Apartment Picture</Label>
              <Input
                type="text"
                name="img"
                onChange={this.handleChange}
                defaultValue={this.props.apartment.img}
              />
            </FormGroup>
            <Button name="submit" onClick={this.handleSubmit}>
              Edit Apartment
            </Button>
          </Form>
        )}
        {this.state.submitted && <Redirect to="/apartmentindex" />}
      </div>
    );
  }
}
export default ApartmentEdit;
