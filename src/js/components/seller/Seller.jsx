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
        
        this.handleChangeSeller = this.handleChangeSeller.bind(this);
        this.handleSellerBtn = this.handleSellerBtn.bind(this);
    }

    handleChangeSeller(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(seller(input));
    }

    handleSellerBtn(e){
        const {dispatch} = this.props;
        dispatch(sellerBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Seller {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeSeller}/>
                <button type="button" onClick={this.handleSellerBtn}>Change</button>
            </div>
        )
    }
}

export default Seller;