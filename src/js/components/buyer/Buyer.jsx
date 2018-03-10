import React from "react";
import {Link} from "react-router-dom";
import History from "../history";

import {
    buyer,
    buyerBtn,
    buyerCache
} from "./buyerActions"

class Buyer extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChangeBuyer = this.handleChangeBuyer.bind(this);
        this.handleBuyerBtn = this.handleBuyerBtn.bind(this);
    }

    handleChangeBuyer(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(buyer(input))
    }

    handleBuyerBtn(e){
        const {dispatch} = this.props;
        dispatch(buyerBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Buyer {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeBuyer}/>
                <button type="button" onClick={this.handleBuyerBtn}>Change</button>
                <History  whereFrom={this.props.match.params.id} />
            </div>
        )
    }
}

export default Buyer;