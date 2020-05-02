import React, { Component } from "react";
import "./MyItemCard.css";
import AuthenticationService from "../../Authentication/AuthenticationService";
class MyItemCard extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(id) {
    AuthenticationService.removeUserItem(id);
  }
  render() {
    return (
      <>
        <div className="row container">
          {this.props.datax.map((x) => (
            <div className="col-md-4" key={x.itemId}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{x.itemName}</h3>
                  <h5 className="card-feature">Game :{x.gameName}</h5>
                  <div className="card-text">
                    <p>Type:{x.itemType} </p>
                    <p> Description:{x.description}</p>
                    <p className="bold">Cost:{x.price}</p>
                  </div>
                  <button>Edit Listing</button>
                  <button onClick={() => this.removeItem(x.itemId)}>
                    Remove Listing
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default MyItemCard;
