import React, { Component } from "react";

class MyItemCard extends Component {
  render() {
    // var x  = [];
    // x = [...this.props.datax];

    // console.log(x);
    // console.log(this.props.datax);
    return (
      <div className="row container">
        {this.props.datax.map((x) => (
          <div className="" key={x.itemId}>
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

export default MyItemCard;
