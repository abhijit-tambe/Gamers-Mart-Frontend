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
      valid: true,
      islogged: AuthenticationService.isUserLoggedIn(),
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
  }

  render() {
    // var user = AuthenticationService.getUserName();
    // var islogged = AuthenticationService.isUserLoggedIn();
    var paramname = this.props.match.params.name;
    var userValidity =
      paramname === sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        ? true
        : false;
    var validity = this.state.validUsers.includes(paramname);
    // var welcome = islogged && validity;
    // AuthenticationService.test();
    // console.log("from render" + this.state.valid);
    // console.log("from render" + this.state.validUsers);
    // console.log(validity);
    // return (
    //   <>
    //     {welcome && <div>welcome home {this.props.match.params.name}</div>}
    //     {!welcome && (
    //       <div>public profile of {this.props.match.params.name}</div>
    //     )}
    //     {!validity && <ErrorComponent></ErrorComponent>}
    //   </>
    // );
    if (validity) {
      if (userValidity) {
        return <div>welcome home {this.props.match.params.name}</div>;
      } else {
        return <div>public profile of {this.props.match.params.name}</div>;
      }
    } else {
      return <ErrorComponent />;
    }
  }
}

export default UserHomeComponent;
