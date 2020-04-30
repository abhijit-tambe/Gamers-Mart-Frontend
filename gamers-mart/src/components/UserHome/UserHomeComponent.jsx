import React, { Component } from "react";
import AuthenticationService, {
  USER_NAME_SESSION_ATTRIBUTE_NAME,
} from "../../Authentication/AuthenticationService.js";
import DataService from "../../Api/DataService.js";
import ErrorComponent from "../Error/ErrorComponent.jsx";

class UserHomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validUsers: [],
      isValidUser: false,
      isLogged: AuthenticationService.isUserLoggedIn(),
      paramName: "",
      returningUser: false,
      isValidUser: false,
      decide: false,
    };
  }

  componentDidMount() {
    console.log("componet did mount");
    DataService.getAllUsers()
      .then((x) => x.data)
      .then((x) => {
        x.forEach((element) => {
          console.log(element.userName);
          this.setState({
            validUsers: [...this.state.validUsers, element.userName],
          });
        });
      });
    if (this.state.islogged) {
      AuthenticationService.authenticatedUserToken();
    }
    var paramname = this.props.match.params.name;
    var returningUser =
      paramname === sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        ? true
        : false;
    var isValidUser = this.state.validUsers.includes(paramname);
    var decide = isValidUser && returningUser;
    this.setState({
      paramName: paramname,
      returningUser,
      isValidUser,
      decide,
    });
  }

  render() {
    if (this.state.decide) {
      return <div>welcome home {this.props.match.params.name}</div>;
    }
    // else if (!this.state.decide) {
    //   return <div>public profile of {this.props.match.params.name}</div>;
    // }
    else {
      return <ErrorComponent />;
    }
  }
}

export default UserHomeComponent;
