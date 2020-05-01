import React, { Component } from "react";
import DataService from "../../Api/DataService.js";
import AuthenticationService, {
  USER_NAME_SESSION_ATTRIBUTE_NAME,
} from "../../Authentication/AuthenticationService.js";
import ErrorComponent from "../Error/ErrorComponent.jsx";
import MyItemCard from "./MyItemCard.jsx";

class MyListingComponent extends Component {
  constructor() {
    super();
    this.state = {
      islogged: AuthenticationService.isUserLoggedIn(),
      validUsers: [],
      mylisting: [],
      user: "",
    };
  }

  componentDidMount() {
    console.log("component did mount");
    var user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (this.state.islogged) {
      AuthenticationService.authenticatedUserToken();
    }
    this.setState({
      user: user,
    });
    DataService.getAllUserListings(user).then((res) => {
      this.setState({
        mylisting: res.data,
      });
    });
    DataService.getAllUsers()
      .then((x) => x.data)
      .then((x) => {
        x.forEach((element) => {
          console.log(element.userName);
          this.setState({
            validUsers: [...this.state.validUsers, element.userName],
          });
        });
      });
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    var paramname = this.props.match.params.name;
    var userValidity = paramname === this.state.user ? true : false;
    if (userValidity) {
      return (
        <>
          <MyItemCard datax={this.state.mylisting}> </MyItemCard>
        </>
      );
    } else return <ErrorComponent />;
  }
}

export default MyListingComponent;

// <div className="row container">
// {this.state.mylisting.map((x) => (
//   <div className="col-lg-4" key={x.itemId}>
//     <div className="card">
//       <div className="card-body">
//         <h3 className="card-title">{x.itemName}</h3>
//         <h5 className="card-feature">Game :{x.gameName}</h5>
//         <div className="card-text">
//           <p>Type:{x.itemType} </p>
//           <p> Description:{x.description}</p>
//           <p className="bold">Cost:{x.price}</p>
//         </div>
//       </div>
//     </div>
//   </div>
