import React,{ Component } from "react";
import  AuthenticationService from '../../Authentication/AuthenticationService.js'
import { Link } from "react-router-dom";
import {withRouter} from 'react-router';
import USER_NAME_SESSION_ATTRIBUTE_NAME from '../../Authentication/AuthenticationService.js'


class HeaderComponent extends Component{
    render(){
        var islogged = AuthenticationService.isUserLoggedIn();
        
        return(
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                    <div> <a href="abhijittambe.com" className="navbar-brand">GamersMart</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/marketplace">Marketplace</Link></li>
                        {islogged && <li><Link className="nav-link" to="/home" >Dashboard</Link></li>}
                    </ul>
                    <ul className="navbar-nav  navbar-collapse justify-content-end">
                        {!islogged && <li><Link to="/login" className="nav-link">Sign In</Link></li>}
                        {islogged && <li> <Link className="nav-link" to="/logout" onClick={AuthenticationService.userlogout}>Sign out</Link></li>}
                        </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderComponent);