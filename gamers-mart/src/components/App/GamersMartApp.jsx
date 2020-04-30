import React, { Component } from "react";
import "./GamersMartApp.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorComponent from "../Error/ErrorComponent";
import SignInComponent from "../SignIn/SignInComponent";
import UserHomeComponent from "../UserHome/UserHomeComponent";
import HeaderComponent from "../Header/HeaderComponent";
import SignOutComponent from "../SignOut/SignOutComponent";
import MarketPlaceComponent from "../Marketplace/MarketplaceComponent";
import MyListingComponent from "../MyListing/MyListingComponent";
import HomepageComponent from "../Homepage/HomepageComponent";
import AuthenticationService from "../../Authentication/AuthenticationService.js";
import SignUpComponent from "../SignUp/SignUpComponent.jsx";

class GamersMartApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: AuthenticationService.isUserLoggedIn(),
      userName: AuthenticationService.getUserName(),
    };
  }

  render() {
    return (
      <div className="GMApp">
        <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={HomepageComponent} />
              <Route path="/login" exact component={SignInComponent} />
              <Route
                path="/marketplace"
                exact
                component={MarketPlaceComponent}
              />
              <Route path="/logout" exact component={SignOutComponent} />

              <Route
                path="/:name/mylistings"
                exact
                component={MyListingComponent}
              />
              <Route path="/:name" exact component={UserHomeComponent} />
              <Route path="/signup/:email" exact component={SignUpComponent} />
              <Route path="/signup" exact component={SignUpComponent} />

              <Route component={ErrorComponent} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default GamersMartApp;
