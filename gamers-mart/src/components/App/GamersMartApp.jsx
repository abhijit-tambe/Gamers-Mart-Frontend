import React,{Component} from 'react'
import './GamersMartApp.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ErrorComponent from './Error/ErrorComponent' 
import SignInComponent from '../SignIn/SignInComponent'
import UserHomeComponent from '../Home/UserHomeComponent'
import HeaderComponent from '../Header/HeaderComponent'
import SignOutComponent from '../SignOut/SignOutComponent'
class GamersMartApp extends Component{

render(){
    return(
        
        <div className="GMApp"> 
       
        <Router>
        <HeaderComponent/>
            <Switch>
            <Route path="/" exact component={SignInComponent}></Route>
            <Route path="/login" component={SignInComponent}></Route>
            <Route path="/home/:name" component={UserHomeComponent}></Route>
            <Route path="/logout" component={SignOutComponent}/>
            <Route component={ErrorComponent}/>
            </Switch>        
        </Router>

        </div>
    );
}

}

export default GamersMartApp;