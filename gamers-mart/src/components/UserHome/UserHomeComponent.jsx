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
        var islogged = AuthenticationService.isUserLoggedIn();
        return(
            <>
            { islogged && <div>
                welcome home {this.props.match.params.name}
            </div>}
            { !islogged && <div>public profile of {this.props.match.params.name}</div>}
            </>
        )
    }
}

export default UserHomeComponent;