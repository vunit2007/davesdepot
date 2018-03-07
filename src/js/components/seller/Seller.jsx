import React from "react";
import {Link} from "react-router-dom";

import {
    seller,
    sellerBtn,
    sellerCache
} from "./sellerActions"

class Seller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input : "Seller"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSellerBtn = this.handleSellerBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleSellerBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(sellerBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Seller {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleSellerBtn}>Change</button>
            </div>
        )
    }
}

export default Seller;