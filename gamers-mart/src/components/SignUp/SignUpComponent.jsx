import React, { Component } from "react";
import "./SignUpComponent.css";
import { Link } from "react-router-dom";
import AuthenticationService from "../../Authentication/AuthenticationService";

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      failed: false,
      st: {
        emailId: "",
        userName: "",
        password: "",
        phoneNumber: null,
      },
    };

    this.changeData = this.changeData.bind(this);
    this.dD = this.dD.bind(this);
  }

  componentDidMount() {
    console.log("component did mount" + this.props.match.params.emailId);
    if (this.props.match.params.email === undefined) {
    } else {
      this.setState({
        st: {
          emailId: this.props.match.params.email,
        },
      });
      console.log("component did mount" + this.props.match.params.email);
    }
  }

  dD() {
    console.log(this.state);
    AuthenticationService.createUser(this.state.st)
      .then((res) => {
        console.log("status:" + res);

        this.setState({
          complete: true,
        });
      })
      .catch((err) => {
        this.setState({
          failed: true,
        });
      });
  }

  changeData(event) {
    this.setState({
      st: {
        [event.target.name]: event.target.value,
      },
    });
  }

  render() {
    // console.log(this.props.emailId)
    return (
      <div className="signupmain">
        {/* <div className="col-3"></div> */}

        <div className="formarea col-12">
          {/* <form> */}
          {this.state.failed && <div> failed signup try again </div>}
          {this.state.complete && (
            <div>
              {" "}
              Registered successfully redirect to{" "}
              <Link className="link" to="/login">
                signin
              </Link>{" "}
            </div>
          )}
          {!this.state.complete && (
            <div className="row d-flex justify-content-center">
              {/* <div className="col-3"></div> */}
              <div className="signuplogo col-7">
                {" "}
                <p>
                  Sign Up for <span className="gamersMart">GamersMart</span>{" "}
                </p>
              </div>
              <div className="col-7">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  name="emailId"
                  value={this.state.st.emailId}
                  onChange={this.changeData}
                />
              </div>
              {/* <div className="col-3"></div>
              <div className="col-3"></div> */}
              <div className="col-7">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pick a username"
                  name="userName"
                  value={this.state.st.userName}
                  onChange={this.changeData}
                />
              </div>
              {/* <div className="col-3"></div>
                <div className="col-3"></div> */}
              <div className="col-7">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Select a password"
                  name="password"
                  value={this.state.st.password}
                  onChange={this.changeData}
                />
              </div>
              {/* <div className="col-3"></div>
    <div className="col-3"></div> */}
              {/* <div className="col-12">
              <label>Retype Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Retype the above password"
              />
            </div> */}
              {/* <div className="col-3"></div>
    <div className="col-3"></div> */}
              <div className="col-7">
                <label>Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Your cell number"
                  name="phoneNumber"
                  value={this.state.st.phonenumber}
                  onChange={this.changeData}
                />
              </div>
              {/* <div className="col-3"></div>
    <div className="col-3"></div> */}
              <div className="col-7">
                {/* <label>Sign Up</label> */}
                <button
                  onClick={this.dD}
                  className="btn btn-success  signupbtn btn-block"
                >
                  Create account
                </button>
              </div>
            </div>
          )}
          {/* </form> */}
        </div>

        {/* <div className="col-3"></div> */}
      </div>
    );
  }
}

export default SignUpComponent;
