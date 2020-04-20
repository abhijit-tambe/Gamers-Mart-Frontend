import React,{ Component } from "react";
import './SignUpComponent.css';
class SignUpComponent extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
              <div className="signuplogo"> <p>Sign Up for <span className="gamersMart">GamersMart</span> </p></div>
            <form>
  <div class="row">
    <div className="col-3"></div>
    <div class="col-6">
      <label>Email</label>
      <input type="text" className="form-control" placeholder="Your email address"/>
    </div>
    <div className="col-3"></div>
    <div className="col-3"></div>
    <div class="col-6">
    <label>Username</label>
      <input type="text" className="form-control" placeholder="Pick a username"/>
    </div>
    <div className="col-3"></div>
    <div className="col-3"></div>
    <div class="col-6">
    <label>Password</label>
      <input type="text" className="form-control" placeholder="Select a password"/>
    </div>
    <div className="col-3"></div>
    <div className="col-3"></div>
    <div class="col-6">
    <label>Retype Password</label>
      <input type="text" className="form-control" placeholder="Retype the above password"/>
    </div>
    <div className="col-3"></div>
    <div className="col-3"></div>
    <div class="col-6">
    <label>Phone</label>
      <input type="text" className="form-control" placeholder="Your cell number"/>
    </div>
    <div className="col-3"></div>
    <div className="col-3"></div>
    <div class="col-6">
    {/* <label>Sign Up</label> */}
      <button  className="btn btn-success btn-lg signupbtn" >Sign Up</button>
    </div>
  </div>
</form>
</div>
        );

    }
}

export default SignUpComponent;