import React,{ Component } from "react";
import AuthenticationService from '../../Authentication/AuthenticationService.js'


class Home extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return(
            <div>
                welcome home {this.props.match.params.name}
            </div>
        )
    }
}

export default Home;