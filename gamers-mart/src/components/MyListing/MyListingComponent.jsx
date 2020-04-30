import React, { Component } from "react";
import DataService from "../../Api/DataService.js";
import AuthenticationService from "../../Authentication/AuthenticationService.js";

class MyListingComponent extends Component {
  constructor() {
    super();
    this.state = {
      mylisting: [],
    };
  }

  componentDidMount() {
    var user = AuthenticationService.getUserName();
    // AuthenticationService.setupAxiosInterceptors();
    DataService.getAllUserListings(user).then((res) => {
      this.setState({
        mylisting: res.data,
      });
    });
  }
  render() {
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
  }
}

export default MyListingComponent;
