import React from "react";
import { Link } from "react-router-dom";

import {
    removeButton
} from "./cartActions"

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemoveButton = this.handleRemoveButton.bind(this);
    }

    handleRemoveButton(e){
        const { dispatch } = this.props;
        const { index } = e.target.dataset;
        dispatch(removeButton(index));
    }

    render() {
        const { listings, cart } = this.props;


        return (
            <div>
                <center>
                    <div className="jumbotron jumbotron-fluid" id='VcartJumbo'>
                        <div className="container">
                            <h1 className="display-3">Cart</h1>
                        </div>
                    </div>

                    <div className="Vcart">
                        <div className="card" id='VcartCard'>
                            <h5 className="card-header alert-primary" id='VcartHeader'>Your Items</h5>
                            <div className="card-body" id="VcartBox">
                                {cart.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="VitemImage"><img src={item.images[0]} height="300px" /></div>
                                            <div className="VitemInfo">
                                                <p className="VproductName">Product Name: {item.name}</p><br />
                                                <p className="VproductPrice">Product Price: {item.price}</p><br />

                                                <span>Qty: {item.quantity}</span>
                                                <br /><br />
                                                <div data-index={index} onClick={this.handleRemoveButton} className="btn " id='VcartRemoveBtn'>Remove Item</div>
                                                <br /><br />
                                                
                                            </div>
                                        </div>
                                    )
                                })}

                               
                                    

                                    <Link to="/Checkout" className="btn" id='VcartAddBtn'>Check Out</Link>
                                </div>
                            </div>
                        </div>


                </center>


            </div>
        )
    }
}

export default Cart;