import React,{ Component } from "react";
import './SignUpComponent.css';
class SignUpComponent extends Component{
    constructor(){
        super();
    }
    render(){
        return(
          <div className="signupmain">
            {/* <div className="col-3"></div> */}
            <div className="formarea col-6">
              <div className="signuplogo"> <p>Sign Up for <span className="gamersMart">GamersMart</span> </p></div>
            {/* <form> */}
  <div className="row">
    {/* <div className="col-3"></div> */}
    <div className="col-12">
      <label>Email</label>
      <input type="text" className="form-control" placeholder="Your email address"/>
    </div>
    {/* <div className="col-3"></div>
    <div className="col-3"></div> */}
    <div className="col-12">
    <label>Username</label>
      <input type="text" className="form-control" placeholder="Pick a username"/>
    </div>
    {/* <div className="col-3"></div>
    <div className="col-3"></div> */}
    <div className="col-12">
    <label>Password</label>
      <input type="text" className="form-control" placeholder="Select a password"/>
    </div>
    {/* <div className="col-3"></div>
    <div className="col-3"></div> */}
    <div className="col-12">
    <label>Retype Password</label>
      <input type="text" className="form-control" placeholder="Retype the above password"/>
    </div>
    {/* <div className="col-3"></div>
    <div className="col-3"></div> */}
    <div className="col-12">
    <label>Phone</label>
      <input type="text" className="form-control" placeholder="Your cell number"/>
    </div>
    {/* <div className="col-3"></div>
    <div className="col-3"></div> */}
    <div className="col-12">
    {/* <label>Sign Up</label> */}
      <button  className="btn btn-success btn-lg signupbtn" >Sign Up</button>
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