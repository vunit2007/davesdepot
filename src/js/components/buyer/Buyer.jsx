import React from "react";
import {Link} from "react-router-dom";

import {
    buyer,
    buyerBtn,
    buyerCache
} from "./buyerActions"

class Buyer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input : "Buyer"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleBuyerBtn = this.handleBuyerBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleBuyerBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(buyerBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Buyer {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleBuyerBtn}>Change</button>
            </div>
        )
    }
}

export default Buyer;