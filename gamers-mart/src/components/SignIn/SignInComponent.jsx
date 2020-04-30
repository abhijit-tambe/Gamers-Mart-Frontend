import React, { Component } from "react";
import "./SignInComponent.css";

import AuthenticateUser from "../../Authentication/AuthenticationService.js";
import UserHomeComponent from "../UserHome/UserHomeComponent";

class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginFailed: false,
      successMessage: false,
    };

    this.changeInput = this.changeInput.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
  }

  changeInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginCheck() {
    AuthenticateUser.authenticateUser(this.state.username, this.state.password)
      .then((res) => {
        AuthenticateUser.createUserSessionWithToken(
          this.state.username,
          res.data.token
        );
        console.log("suc" + res.data.token);
        this.setState({
          loginFailed: false,
          successMessage: true,
        });
        this.props.history.push(`/${this.state.username}`);
      })
      .catch((res) => {
        console.log("fail" + res);
        this.setState({
          successMessage: false,
          loginFailed: true,
        });
      });
    // if (
    //   AuthenticateUser.authenticateUser(
    //     this.state.username,
    //     this.state.password
    //   )
    // ) {
    //   this.setState({
    //     loginFailed: false,
    //     successMessage: true,
    //   });
    //   this.props.history.push(`/${this.state.username}`);
    // } else {
    //   this.setState({
    //     successMessage: false,
    //     loginFailed: true,
    //   });
    // }
  }

  render() {
    return (
      <div className="container  ">
        <h5>Sign in to Gamers Mart</h5>
        {this.state.loginFailed && (
          <h3> LoginComponent Failed Invalid Username or password</h3>
        )}
        {this.state.successMessage && <h3>Loggedin Successfull</h3>}
        <div className="signIn login-container d-flex justify-content-center align-items-center">
          <div>
            <label>User Name</label> <br />
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.changeInput}
            ></input>
            <br />
            <label>Password </label> <br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.changeInput}
            ></input>
            <br />
            <button
              className="btn btn-md btn-success"
              onClick={this.loginCheck}
            >
              Sign in
            </button>
            {/* <button className="btn btn-md btn-primary" onClick={this.logout}>Logout</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SignInComponent;
