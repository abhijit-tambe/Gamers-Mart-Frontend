import React,{Component} from 'react'
import './GamersMartApp.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ErrorComponent from '../Error/ErrorComponent' 
import SignInComponent from '../SignIn/SignInComponent'
import UserHomeComponent from '../UserHome/UserHomeComponent'
import HeaderComponent from '../Header/HeaderComponent'
import SignOutComponent from '../SignOut/SignOutComponent'
import MarketPlaceComponent from '../Marketplace/MarketplaceComponent'
import MyListingComponent from '../MyListing/MyListingComponent'
import HomepageComponent from '../Homepage/HomepageComponent'
import AuthenticationService from '../../Authentication/AuthenticationService.js'


class GamersMartApp extends Component{

    constructor(props){
        super(props);
        this.state={
            isLogged: AuthenticationService.isUserLoggedIn(),
            userName: AuthenticationService.getUserName(),
        }
    }

    

render(){
    return(
        
        <div className="GMApp container"> 
       
        <Router>
        <HeaderComponent />
            <Switch>
            <Route path="/" exact component={HomepageComponent}></Route>
            <Route path="/login" component={SignInComponent}></Route>
            <Route path="/home" component={UserHomeComponent}></Route>
            <Route path="/marketplace" component={MarketPlaceComponent}/>
            <Route path="/logout" component={SignOutComponent}/>
            <Route path="/mylistings" component={MyListingComponent}/>
            <Route component={ErrorComponent}/>
            </Switch>        
        </Router>

        </div>
    );
}

}

export default GamersMartApp;