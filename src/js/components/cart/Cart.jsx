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
        this.state = {
            input : "Cart"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleCartBtn = this.handleCartBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleCartBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(cartBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Cart {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleCartBtn}>Change</button>
            </div>
        )
    }
}

export default Cart;