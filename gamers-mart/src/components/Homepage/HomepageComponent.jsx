import React,{ Component } from "react";
import AuthenticationService from '../../Authentication/AuthenticationService.js'
import './HomepageComponent.css'
class HomepageComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var islogged = AuthenticationService.isUserLoggedIn();
        return(
            
            <div>
            <div className="banner "> 
                <div > default Homepage </div>
                </div>
            { ! islogged && <div className=" jumbotron container ">
                <div className="joinTitle">join Gamers Mart</div>
                <div className="d-flex justify-content-center">
                <form className="form-inline">
                 <div className="form-group mx-sm-2 mb-2">
                <label  className="sr-only">Email</label>
                 <input  className="form-control" value="" placeholder="email@example.com"/>
                </div>
                 <div className="form-group mx-sm-2 mb-2">
                <label  className="sr-only">Password</label>
                <input type="password" className="form-control" value="" placeholder="Password"/>
                 </div>
                 <div className="form-group mx-sm-2 mb-2">
                <label  className="sr-only">Confirm Password</label>
                <input type="password" className="form-control" value="" placeholder="Retype Password"/>
                 </div>
                     <button  className="btn mx-sm-2 btn-primary mb-2">Sign up for Game Mart</button>
                </form>
                </div>
            </div> }
            {/* </div> */}
            </div>
            
        );
    }
}

export default  HomepageComponent;