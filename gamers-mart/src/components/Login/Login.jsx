import React,{Component} from 'react'
import './Login.css'
class Login extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }

        this.changeInput= this.changeInput.bind(this)

    }


    changeInput(event){
        this.setState({
            [event.target.name]:event.target.value,
        })
    }


    render(){
        return(
            <div className="container">
                <h1>Login</h1>
           <div >
               <label>
                   User Name  <br/>
               <input type="text" name="username" value={this.state.username} onChange={this.changeInput}></input>
               </label>
               <br/>
               <label>
                   Password <br/>
               <input type="password" name="password" value={this.state.password} onChange={this.changeInput}></input>
               </label>
               
           </div>
           </div>
        );
    }
}

export default Login;