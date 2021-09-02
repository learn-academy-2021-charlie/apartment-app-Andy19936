import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentShow from "./pages/ApartmentShow";
import ApartmentEdit from "./pages/ApartmentEdit";
import NotFound from "./pages/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      apartments: [],
    };
  }

  componentDidMount() {
    this.readApartment();
  }

  readApartment = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((apartmentArray) => this.setState({ apartments: apartmentArray }))
      .catch((errors) => console.log("apartments read errors:", errors));
  };

  createApartment = (newApartment) => {
    return fetch("/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Please check your submission.");
        }
        return response.json();
      })
      .then((payload) => {
        this.readApartment();
      })
      .catch((errors) => {
        console.log("apartment create errors", errors);
      });
  };

  updateApartment = (editApartment, id) => {
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(editApartment),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => this.readJob())
      .catch((errors) => console.log("apartment update errors:", errors));
  };

  deleteApartment = (id) => {
    fetch(`/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.readApartment())
      .catch((errors) => console.log("apartment delete fetch errors:", errors));
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <Router>
        <Header routes={this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/apartmentindex"
            render={(props) => (
              <ApartmentIndex apartments={this.state.apartments} />
            )}
          />
          <Route
            path="/apartmentshow/:id"
            render={(props) => {
              let id = props.match.params.id;
              let apartment = this.state.apartments.find(
                (apartment) => apartment.id === +id
              );
              return (
                <ApartmentShow
                  apartment={apartment}
                  deleteApartment={this.deleteApartment}
                />
              );
            }}
          />
          {logged_in && (
            <Route
              path="/apartmentnew"
              render={(props) => (
                <ApartmentNew
                  createApartment={this.createApartment}
                  routes={this.props}
                  user={current_user}
                />
              )}
            />
          )}
          {logged_in && (
            <Route
              path={"/apartmentedit/:id"}
              render={(props) => {
                let id = props.match.params.id;
                let apartment = this.state.apartments.find(
                  (apartment) => apartment.id === +id
                );
                return (
                  <ApartmentEdit
                    updateApartment={this.updateApartment}
                    apartment={apartment}
                    user={current_user}
                  />
                );
              }}
            />
          )}
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
