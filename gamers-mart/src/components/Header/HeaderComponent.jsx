import React,{ Component } from "react";
import  AuthenticationService from '../../Authentication/AuthenticationService.js'
import { Link } from "react-router-dom";
import {withRouter} from 'react-router';

class HeaderComponent extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                    <div> <a href="abhijittambe.com" className="navbar-brand">abhijit tambe</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link">dsadsa</Link>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav  navbar-collapse justify-content-end">
                        <li> <Link className="nav-link" to="/logout" onClick={ AuthenticationService.userlogout}>Sign out</Link></li>
                        </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderComponent);