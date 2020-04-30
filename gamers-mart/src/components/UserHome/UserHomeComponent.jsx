import React, { Component } from "react";
import AuthenticationService, {
  USER_NAME_SESSION_ATTRIBUTE_NAME,
} from "../../Authentication/AuthenticationService.js";
import DataService from "../../Api/DataService.js";
import ErrorComponent from "../App/ErrorComponent.jsx";
import { Switch } from "react-router-dom";

class UserHomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validUsers: [],
      valid: true,
    };
  }

  componentDidMount() {
    // this.setState((state, props) => ({
    //   isLogged: AuthenticationService.getUserName(),
    // }));
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

    // this.setState({
    //   validUsers: [...this.state.validUsers, "vsdas"],
    //   valid: false,
    // });

    // console.log(this.state.valid);
    // this.setState(())
    // console.log(
    //   "adfter " +
    //     this.state.validUsers.forEach((x) => {
    //       return x + "c";
    //     })
    // );
  }

  render() {
    var user = AuthenticationService.getUserName();
    var islogged = AuthenticationService.isUserLoggedIn();
    var paramname = this.props.match.params.name;
    var returninguser =
      paramname === sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        ? true
        : false;
    var validity = this.state.validUsers.includes(paramname);
    var welcome = islogged && validity;

    // AuthenticationService.test();
    // console.log("from render" + this.state.valid);
    // console.log("from render" + this.state.validUsers);
    console.log(validity);
    return (
      <>
        {welcome && <div>welcome home {this.props.match.params.name}</div>}
        {!welcome && (
          <div>public profile of {this.props.match.params.name}</div>
        )}
        {!validity && <ErrorComponent></ErrorComponent>}
      </>
    );
  }
}

export default UserHomeComponent;
