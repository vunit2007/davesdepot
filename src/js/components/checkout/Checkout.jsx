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
                <center>

                <h1>Hello {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeCheckout}/>
                <button type="button" onClick={this.handleCheckoutBtn}>Change</button>
                <Link to="/"><button type="button">Login</button></Link>
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-4">Checkout</h1>
                </div>
                    </div>
                <div className="VcheckOut">
      <div className="card">
  <h5 className="card-header">Card Information</h5>
  <div className="card-body" id="VcheckOutBox">
  <form>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Cardholder Name"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Card Number"/>
    </div>
  </div><br/>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Billing Address"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="City"/>
    </div>
  </div>
</form><br/>

<div className="VpostalCodeDiv">
<p>Postal Code</p>
<span className="VpostalCode">
    <input type="text" name="zipcode" maxLength="5" size="7" />

</span>
</div>

<div className="VstateDiv">
<p>State</p>
<span className="VstateS">
    <input type="text" name="zipcode" maxLength="2" size="2" />

</span>
</div>

<div className="VexpirationDiv">
<p>Exp Date</p>
<span className="VexpirationS">
    <input type="text" name="month" placeholder="MM" maxLength="2" size="2" />
    <span>/</span>
    <input type="text" name="year" placeholder="YY" maxLength="2" size="2" />
</span>
</div>

<div className="VsecurityCodeDiv">
<p>Security Code</p>
<span className="VsecurityCode">
    <input type="text" name="month"  maxLength="4" size="5" />
</span>
</div>


  </div>
</div>

<br/><br/>


<div className="card">
  <h5 className="card-header">Order Summary</h5>
  <div className="card-body">
    <h5 className="card-title">Subtotal</h5>
    <p className="card-text" id="VsubTotal">$250</p>
  </div>
</div>


</div>

<br/><br/>
<Link to="/Thanks" className="btn btn-primary">Place Order</Link><br/><br/><br/>


</center>


            </div>
        )
    }
}

export default Checkout;