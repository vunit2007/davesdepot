import React from "react";
import { Link } from "react-router-dom";
import { Alert, Button, UncontrolledAlert } from "reactstrap";
import History from "../history";

import {
    seller,
    sellerBtn
} from "./sellerActions"

class Seller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };

        this.handleChangeSeller = this.handleChangeSeller.bind(this);
        this.handleSellerBtn = this.handleSellerBtn.bind(this);
    }

    handleChangeSeller(e) {
        let input = e.target.value;
        const { dispatch } = this.props;
        dispatch(seller(input));
    }

    handleSellerBtn(e) {
        const { dispatch } = this.props;
        dispatch(sellerBtn());
    }

    render() {
        
        return (
            <div>
                <h1>Hello Seller {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeSeller} />
                <Button color="success" onClick={this.handleSellerBtn}>Change</Button>
                <UncontrolledAlert color="info">
                    I am an alert and I can be dismissed!
                </UncontrolledAlert>
                <History whereFrom={this.props.match.params.id} />
            </div>
        )
    }
}

export default Seller;