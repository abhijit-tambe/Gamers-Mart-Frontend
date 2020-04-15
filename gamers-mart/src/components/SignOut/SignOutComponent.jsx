import React,{ Component } from "react";
import AuthenticateService from '../../Authentication/AuthenticationService.js'
class SignOutComponent extends Component{
    render(){
        return(
        <h3 className="alert alert-primary"> User Signed Out Successfully.</h3>
        );
    }
}

export default SignOutComponent;