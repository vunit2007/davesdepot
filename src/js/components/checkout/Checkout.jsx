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
        this.state = {
            input : "Checkout"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckoutBtn = this.handleCheckoutBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleCheckoutBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(checkoutBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Checkout {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleCheckoutBtn}>Change</button>
            </div>
        )
    }
}

export default Checkout;