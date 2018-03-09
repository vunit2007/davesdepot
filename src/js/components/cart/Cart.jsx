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
                <Link to="/"><button type="button">Login</button></Link>
                <center>
<div className="jumbotron jumbotron-fluid">
<div className="container">
  <h1 className="display-4">Cart</h1>
</div>
</div>

<div className="Vcart">
      <div className="card">
  <h5 className="card-header">Your Items</h5>
  <div className="card-body" id="VcartBox">
  <div className="VitemImage"><img src="https://i5.walmartimages.com/asr/b4f8222c-1fd4-4b76-8030-d93ab377719d_1.97ab13fc56f609ffbfbfc53db8bd69f0.jpeg" height="300px"/></div>
   <div className="VitemInfo">
    <p className="VproductName">Product Name</p><br/>
    <p className="VproducePrice">Produce Price</p><br/>
      <button className="Vhey" type="button" name="button">
        <img src="https://www.clker.com/cliparts/5/p/c/l/l/U/up-arrow-black-md.png" alt="" height="20px" />
      </button>
      <input type="text" name="name" value="1" size="1" />
      <button className="Vhey" type="button" name="button">
        <img src="http://www.clker.com/cliparts/v/R/s/T/J/t/down-grey-arrow-md.png" alt="" height="20px"/>
      </button>
      <br /><br /><br/><br/>

    <a href="#" className="btn btn-primary">Remove Item</a>
</div>
  </div>

</div>
<br /> <br />
<a href="#" className="btn btn-primary">Check Out</a>
<br/><br/><br />
</div>


</center>


            </div>
        )
    }
}

export default Cart;