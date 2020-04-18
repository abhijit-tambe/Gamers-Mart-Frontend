import React,{ Component } from "react";
import AuthenticationService, { USER_NAME_SESSION_ATTRIBUTE_NAME } from '../../Authentication/AuthenticationService.js'


class UserHomeComponent extends Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.setState((state,props) =>({
               isLogged: AuthenticationService.getUserName(),
        }))
    }


    render(){
        var user = AuthenticationService.getUserName();
        return(
            <div>
                welcome home {user}
            </div>
        )
    }
}

export default UserHomeComponent;