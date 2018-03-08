import React from "react";
import {Link} from "react-router-dom";

import {
    checkout,
    checkoutBtn,
    checkoutCache
} from "./checkoutActions"

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChangeCheckout = this.handleChangeCheckout.bind(this);
        this.handleCheckoutBtn = this.handleCheckoutBtn.bind(this);
    }

    handleChangeCheckout(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(checkout(input));
    }

    handleCheckoutBtn(e){
        const {dispatch} = this.props;
        dispatch(checkoutBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Checkout {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeCheckout}/>
                <button type="button" onClick={this.handleCheckoutBtn}>Change</button>
            </div>
        )
    }
}

export default Checkout;