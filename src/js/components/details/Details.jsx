import React from "react";
import { Link } from "react-router-dom";


import {
    getDetails,
    updateQuantity
} from "./detailsActions";

import {
    homeRedirectFalse
} from "../home/homeActions";

import {
    listingsRedirectFalse
} from "../listings/listingsActions";
import { addToCart } from "../cart/cartActions";

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.handleHomeRedirectFalse = this.handleHomeRedirectFalse.bind(this);
        this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(updateQuantity(1));
    }

    handleHomeRedirectFalse() {
        const { dispatch } = this.props;
        dispatch(homeRedirectFalse());
        dispatch(listingsRedirectFalse());
    }

    handleUpdateQuantity(e){
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateQuantity(value));
    }

    handleAddToCart(e){
        const { dispatch, quantity, listings, index } = this.props;
        let item = listings[index];
        item.quantity = quantity;
        dispatch(addToCart(item));
    }

    render() {
        let { listings, index } = this.props;
        const listing = listings[index];
        return (
            <div>

                <ul className="slider" id='Eslider'>

                    {listing.images.reverse().map((image, index) => {
                        return (
                            <li key={image}>
                                <input type="radio" id={`slide${index}`} name="slide" defaultChecked={true}/>
                                <label htmlFor={`slide${index}`}></label>
                                <img src={image} alt={`Panel ${index}`} />
                            </li>
                        )
                    })}

                </ul>
                <br />

                <div className='container' id='EdetailsContainer'>

                    <div className='row' id='EdetailsRow'>

                        <div className='col-md-12' id='EdetailsCol8'>

                            <div className="card-footer alert-primary" id='EdetailsFooter'>
                                <h2 > {listing.name} </h2>
                            </div>

                            <div className='card' id='EdetailsSpan'>
                                <span >Price: ${listing.price}</span>
                            </div>

                            <div className='card' id='EdetailsSpan'>
                                <span>Qty: <input onChange={this.handleUpdateQuantity} defaultValue="1" className='EdetailsInput' type='number'></input>  </span>
                            </div>

                            <div className='condition' id='EdetailsSpan'>
                                <span>Condition: {listing.condition}</span>
                            </div>

                            {listing.sale &&
                                <div className='sale' id='EdetailsSpan'>
                                    <span>On SALE NOW!</span>
                                </div>
                            }

                            <div className='card' id='col8Card'>
                                <p>Description: {listing.description} </p>
                            </div>


                            <Link to="/" className='btn btn-warning' onClick={this.handleHomeRedirectFalse} id='EdetailsBackBtn'>Back </Link>
                            <Link to="cart" className='btn btn-primary' onClick={this.handleAddToCart} id='EdetailsBtn'>Add to cart </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;