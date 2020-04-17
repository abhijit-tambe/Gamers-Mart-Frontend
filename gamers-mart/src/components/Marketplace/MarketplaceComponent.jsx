import React,{ Component } from "react";
import DataService from '../../Api/DataService.js'
class MarketPlaceComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            listings:[]
        };

        this.getAllListings = this.getAllListings.bind(this);
    }


    componentDidMount(){
        this.getAllListings();
    }

    getAllListings(){
        DataService.getAllItemListings().then(res=>{
            console.log(res.data);
            this.setState({
                listings:res.data,
            })
        });
    }
    
render(){
    return(
        <div>
           {/* <div> <button className="btn btn-primary" onClick={this.getAllListings}>click me</button></div> */}
        <table className="table">
            <thead>
                <tr>
                    <th>Owner Name</th>
                    <th>Game Name</th>
                    <th>Item Type</th>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
               {this.state.listings.map(result=>
                <tr key={result.itemId}>
                <td>{result.userName}</td>
                <td>{result.gameName}</td>
                <td>{result.itemType}</td>
                <td>{result.itemName}</td>
                <td>{result.description}</td>
                <td>{result.price}</td>
                </tr>)}
            </tbody>
        </table>
        </div>
    );
}
}

export default MarketPlaceComponent;