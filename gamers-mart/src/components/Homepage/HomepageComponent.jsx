import React, { Component } from "react";
import AuthenticationService from "../../Authentication/AuthenticationService.js";
import "./HomepageComponent.css";
import SignUpComponent from "../SignUp/SignUpComponent.jsx";
class HomepageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      inputEmpty: true,
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.redirectToSignup = this.redirectToSignup.bind(this);
  }

  changeEmail(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });

    if (event.target.value === "") {
      this.setState({ inputEmpty: true });
    } else {
      this.setState({ inputEmpty: false });
    }
  }

  redirectToSignup() {
    console.log(this.state.emailId);
    if (this.state.inputEmpty) this.props.history.push(`/signup`);
    else this.props.history.push(`/signup/${this.state.emailId}`);
  }

  render() {
    var islogged = AuthenticationService.isUserLoggedIn();
    return (
      <div>
        <div className="banner ">
          <div> default Homepage </div>
        </div>
        {!islogged && (
          <div className=" jumbotron container ">
            <div className="joinTitle">join Gamers Mart</div>
            <div className="d-flex justify-content-center">
              {/* <form className="form-inline"> */}
              <div className="p mx-md-2 mb-1">
                {/* <label  className="sr-only">Email</label> */}
                <input
                  className="form-control"
                  type="email"
                  placeholder="Your Email address"
                  name="emailId"
                  value={this.state.emailId}
                  onChange={this.changeEmail}
                />
              </div>
              {/* <div className="form-group mx-sm-2 mb-2">
                <label  className="sr-only">Confirm Password</label>
                <input type="password" className="form-control" value="" placeholder="Retype Password"/>
                 </div> */}
              <button
                onClick={this.redirectToSignup}
                className="btn mx-md-5 btn-primary mb-5"
              >
                Sign up for Game Mart
              </button>
              {/* </form> */}
            </div>
          </div>
        )}

        {/* {true && <SignUpComponent emailid={this.state.Email}></SignUpComponent>} */}
        {/* </div> */}
      </div>
    );
  }
}

export default HomepageComponent;
