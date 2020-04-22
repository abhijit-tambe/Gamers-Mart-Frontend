import React, { Component } from "react";
import "./SignUpComponent.css";

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      emailId:'',
      userName:'',
      password:'',
      phoneNumber:''
    };

    this.changeData=this.changeData.bind(this);
    this.dD=this.dD.bind(this);
  }


  componentDidMount(){
  // console.log('component did mount'+this.props.match.params.emailId);
  this.setState({
    emailId:this.props.match.params.email,
  })
  }


  dD()
  {
    console.log(this.state);
  }


  changeData(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }



  render() {
    // console.log(this.props.emailId)
    return (
      <div className="signupmain">
        {/* <div className="col-3"></div> */}
        <div className="formarea col-6">
          
          {/* <form> */}
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
                value={this.state.emailId}
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
                value={this.state.userName}
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
                value={this.state.password}
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
                value={this.state.phonenumber}
                onChange={this.changeData}
              />
            </div>
            {/* <div className="col-3"></div>
    <div className="col-3"></div> */}
            <div className="col-7">
              {/* <label>Sign Up</label> */}
              <button onClick={this.dD} className="btn btn-success btn-lg signupbtn">
                Sign Up
              </button>
            </div>
          </div>
          {/* </form> */}
        </div>
        {/* <div className="col-3"></div> */}
      </div>
    );
  }
}

export default SignUpComponent;
