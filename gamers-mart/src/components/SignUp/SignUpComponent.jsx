import React,{ Component } from "react";
import './SignUpComponent.css';
class SignUpComponent extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
            <form>
  <div class="row">
    <div className="col-3"></div>
    <div class="col-6">
      <label>Email
      <input type="text" className="form-control" placeholder="Your email address"/></label>
    </div>
    <div className="col-3"></div>
    <div className="col-3"></div>
    <div class="col-6">
    <label>Firstname</label>
      <input type="text" className="form-control" placeholder="Your firstname"/>
    </div>
  </div>
</form></div>
        );

    }
}

export default SignUpComponent;