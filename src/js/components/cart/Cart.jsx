import React from "react";
import {Link} from "react-router-dom";

import {
    cart,
    cartBtn,
    cartCache
} from "./cartActions"

class Cart extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChangeCart = this.handleChangeCart.bind(this);
        this.handleCartBtn = this.handleCartBtn.bind(this);
    }

    handleChangeCart(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(cart(input));
    }

    handleCartBtn(e){
        const {dispatch} = this.props;
        dispatch(cartBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Cart {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeCart}/>
                <button type="button" onClick={this.handleCartBtn}>Change</button>
            </div>
        )
    }
}

export default Cart;