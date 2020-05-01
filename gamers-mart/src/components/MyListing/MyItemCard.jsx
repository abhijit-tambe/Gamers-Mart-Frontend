import React, { Component } from "react";
import "./MyItemCard.css";
class MyItemCard extends Component {
  render() {
    return (
      <>
        <div className="additem row">
          <div className="outerbox">
            <div className="innerbox">
              <button className="btn btn-lg btn-primary">Add Item</button>
            </div>
          </div>
        </div>

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
                  <button>Remove Listing</button>
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
