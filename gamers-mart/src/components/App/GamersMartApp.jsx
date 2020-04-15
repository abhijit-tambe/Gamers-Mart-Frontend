import React,{Component} from 'react'
import './GamersMartApp.css'
import Login from '../Login/Login'

class GamersMartApp extends Component{

render(){
    return(
        <>
        <div className="GMApp"> welcome to Gamers Mart</div>
        <Login/>
        </>
    );
}

}

export default GamersMartApp;