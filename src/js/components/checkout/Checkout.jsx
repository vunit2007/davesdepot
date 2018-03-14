import React from "react";
import { Link } from "react-router-dom";
import {Table} from "reactstrap";

import {
    checkout,
} from "./checkoutActions";

class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.handleCheckout = this.handleCheckout.bind(this);
    }

    handleCheckout(){
        const { dispatch, user, cart } = this.props;
        let orderObj = {
            ...user,
            _listings: cart
        }
        dispatch(checkout(user, orderObj));
    }

    render() {
        const { cart } = this.props;
        let subtotal = 0;
        let numberItems = 0;
        return (
            <div>
                <center>

                    <h1>Hello {this.props.input}</h1>
                    <input type="text" onChange={this.handleChangeCheckout} />
                    <button type="button" onClick={this.handleCheckoutBtn}>Change</button>
                    <Link to="/"><button type="button">Login</button></Link>
                    <div className="jumbotron jumbotron-fluid" id='VcheckoutJumbo'>
                        <div className="container">
                            <h1 className="display-3">Checkout</h1>
                        </div>
                    </div>
                    <div className="VcheckOut">
                        <div className="card">
                            <h5 className="card-header alert-primary" id='VcheckoutHeader'>Card Information</h5>
                            <div className="card-body" id="VcheckOutBox">
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <input id='VcheckoutInput' type="text" className="form-control" placeholder="Cardholder Name" />
                                        </div>
                                        <div className="col">
                                            <input id='VcheckoutInput' type="text" className="form-control" placeholder="Card Number" />
                                        </div>
                                    </div><br />
                                    <div className="row">
                                        <div className="col">
                                            <input id='VcheckoutInput' type="text" className="form-control" placeholder="Billing Address" />
                                        </div>
                                        <div className="col">
                                            <input id='VcheckoutInput' type="text" className="form-control" placeholder="City" />
                                        </div>
                                    </div>
                                </form><br />

                                <div className="VpostalCodeDiv">
                                    <p>Postal Code</p>
                                    <span className="VpostalCode">
                                        <input id='VcheckoutInput' type="text" name="zipcode" maxLength="5" size="7" />

                                    </span>
                                </div>

                                <div className="VstateDiv">
                                    <p>State</p>
                                    <span className="VstateS">
                                        <input id='VcheckoutInput' type="text" name="zipcode" maxLength="2" size="2" />

                                    </span>
                                </div>

                                <div className="VexpirationDiv">
                                    <p>Exp Date</p>
                                    <span className="VexpirationS">
                                        <input id='VcheckoutInput' type="text" name="month" placeholder="MM" maxLength="2" size="3" />
                                        <span> / </span>
                                        <input id='VcheckoutInput' type="text" name="year" placeholder="YYYY" maxLength="4" size="5" />
                                    </span>
                                </div>

                                <div className="VsecurityCodeDiv">
                                    <p>Security Code</p>
                                    <span className="VsecurityCode">
                                        <input id='VcheckoutInput' type="text" name="month" maxLength="4" size="5" />
                                    </span>
                                </div>


                            </div>
                        </div>

                        <br /><br />


                        <div className="card">
                            <h5 className="card-header alert-primary" id='VcheckoutHeader'>Order Summary</h5>
                            <div className="card-body" id='VcheckoutBody'>
                            <Table striped bordered id="dAliceBlue" className="dTextCenter">
                                <thead>
                                    <tr>
                                        <th>Item #</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {cart.map((item,index) => {
                                        // console.log("checkoutItem: ", item)
                                        subtotal += (item.price * item.quantity);
                                        numberItems += item.quantity;
                                        return (
                                            <tr key={index}>
                                                <th>#{index + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </Table>
                                        <h3 className="card-title">Subtotal</h3>
                                <p className="card-text" id="VsubTotal">{numberItems} items for ${subtotal.toFixed(2)}</p>
                            </div>
                        </div>


                    </div>

                    <br /><br />
                    <Link to="/Thanks" className="btn" id='VcheckoutBtn'>Place Order</Link><br /><br /><br />


                </center>


            </div>
        )
    }
}

export default Checkout;