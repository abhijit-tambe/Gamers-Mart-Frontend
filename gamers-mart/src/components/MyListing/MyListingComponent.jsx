import React, { Component } from "react";
import DataService from "../../Api/DataService.js";
import AuthenticationService, {
  USER_NAME_SESSION_ATTRIBUTE_NAME,
} from "../../Authentication/AuthenticationService.js";
import ErrorComponent from "../Error/ErrorComponent.jsx";

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
    var user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
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
    if (this.state.islogged) {
      AuthenticationService.authenticatedUserToken();
    }
  }
  render() {
    var paramname = this.props.match.params.name;
    var userValidity = paramname === this.state.user ? true : false;
    if (userValidity)
      return (
        // <table className="table">
        //     <thead>
        //         <tr>
        //         <th>Game Name</th>
        //         <th>Item Type</th>
        //         <th>Item Name</th>
        //         <th>Description</th>
        //         <th>Price</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         { this.state.mylisting.map(x=>
        //     <tr key={x.itemId}>
        //     <td>{x.gameName}</td>
        //     <td>{x.itemType}</td>
        //     <td>{x.itemName}</td>
        //     <td>{x.description}</td>
        //     <td>{x.price}</td>
        //     </tr>)}
        //     </tbody>
        // </table>

        <div className="row container">
          {this.state.mylisting.map((x) => (
            <div className="col-lg-4" key={x.itemId}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{x.itemName}</h3>
                  <h5 className="card-feature">Game :{x.gameName}</h5>
                  <div className="card-text">
                    <p>Type:{x.itemType} </p>
                    <p> Description:{x.description}</p>
                    <p className="bold">Cost:{x.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    else return <ErrorComponent />;
  }
}

export default MyListingComponent;
