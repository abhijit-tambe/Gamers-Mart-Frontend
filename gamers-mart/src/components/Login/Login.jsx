import React,{Component} from 'react'
import './Login.css'

import AuthenticateUser from '../../Authentication/AuthenticationService.js'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            loginFailed: false,
            successMessage: false
        }

        this.changeInput= this.changeInput.bind(this);
        this.loginCheck =this.loginCheck.bind(this);
        this.logout = this.logout.bind(this);

    }

    logout(){
        if(AuthenticateUser.isUserLoggedIn()){
            AuthenticateUser.userlogout();
        }
    }

    changeInput(event){
        this.setState({
            [event.target.name]:event.target.value,
        })
    }

    loginCheck(){
        AuthenticateUser.AuthenticateUser(this.state.username,this.state.password);
        if(AuthenticateUser.isUserLoggedIn()){
            console.log('suc')
            // this.setState({
            //     loginFailed:false,
            //     successMessage: true,
            // })
            this.props.history.push(`/Home/${this.state.username}`);
        }else{
            console.log('fail')
            this.setState({
                successMessage:false,
                loginFailed: true
            })
        }
        
        
           
    }

    render(){
        
        return(
            <div className="container">
                <h1>Login</h1>
                {this.state.loginFailed && <h3> Login Failed Invalid Username or password</h3>}
                {this.state.successMessage &&<h3>Loggedin Successfull</h3>}
           <div>
               <label>
                   User Name  <br/>
               <input type="text" name="username" value={this.state.username} onChange={this.changeInput}></input>
               </label>
               <br/>
               <label>
                   Password <br/>
               <input type="password" name="password" value={this.state.password} onChange={this.changeInput}></input>
               </label>
               <button className="btn btn-md btn-primary" onClick={this.loginCheck}>Login</button>
               <button className="btn btn-md btn-primary" onClick={this.logout}>Logout</button>
           </div>
           </div>
        );
    }
}

export default Login;