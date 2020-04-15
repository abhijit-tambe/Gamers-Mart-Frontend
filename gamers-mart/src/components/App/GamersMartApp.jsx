import React,{Component} from 'react'
import './GamersMartApp.css'
import Login from '../Login/Login'
import Home from '../Home/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom' 
class GamersMartApp extends Component{

render(){
    return(
        
        <div className="GMApp"> welcome to Gamers Mart
        <Router>
            <>
            <Route path="/" exact component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home/:name" component={Home}></Route>
            </>        
        </Router>

        </div>
    );
}

}

export default GamersMartApp;