import React from "react";
import { Link } from "react-router-dom";


import {
    getDetails,
} from "./detailsActions";

import {
    homeRedirectFalse
} from "../home/homeActions";

import {
    listingsRedirectFalse
} from "../listings/listingsActions";

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.handleHomeRedirectFalse = this.handleHomeRedirectFalse.bind(this);
    }

    handleHomeRedirectFalse(){
        const {dispatch} = this.props;
        dispatch(homeRedirectFalse());
        dispatch(listingsRedirectFalse());
    }

    render() {
        let { listings, index } = this.props;
        console.log("index: ", index);
        const listing = listings[index];
        return (
            <div>

                <ul className="slider" id='Eslider'>
                    <li>
                        <input type="radio" id="slide1" name="slide" checked />
                        <label for="slide1"></label>
                        <img src="https://dribbble.s3.amazonaws.com/users/322/screenshots/872485/coldchase.jpg" alt="Panel 1" />
                    </li>
                    <li>
                        <input type="radio" id="slide2" name="slide" checked />
                        <label for="slide2"></label>
                        <img src="http://via.placeholder.com/350x150" alt="Panel 2" />
                    </li>
                    <li>
                        <input type="radio" id="slide3" name="slide" checked />
                        <label for="slide3"></label>
                        <img src="https://picsum.photos/200/300/?random" alt="Panel 2" />
                    </li>
                    <li><a href="http://cssslider.com/">
                        <input type="radio" id="slide4" name="slide" />
                        <label for="slide4"></label>
                        <img src="https://dribbble.s3.amazonaws.com/users/322/screenshots/599584/home.jpg" alt="Panel 4" /></a>
                    </li>
                </ul>
                <br/>

                    <div className='container' id='EdetailsContainer'>

                        <div className='row' id='EdetailsRow'>

                            <div className='col-md-12' id='EdetailsCol8'>

                                <div className="card-footer alert-primary" id='EdetailsFooter'>
                                    <h2 > Easy Street Sign </h2>
                                </div>

                                <div className='card' id='EdetailsSpan'>
                                    <span >Price: $69</span>
                                </div>

                                <div className='card' id='EdetailsSpan'>
                                    <span>Qty: <input className='EdetailsInput' type='number'></input>  </span>
                                </div>

                                <div className='condition' id='EdetailsSpan'>
                                    <span>Condition:</span>
                                </div>

                                <div className='sale' id='EdetailsSpan'>
                                    <span>Sale:</span>
                                </div>

                                <div className='card' id='col8Card'>
                                    <p>Description: This easy street sign is one of a kind. You will always be on easy street forever! </p>
                                </div>


                                <Link to="/" className='btn btn-warning' id='EdetailsBackBtn'>Back </Link>
                                <Link to="Cart" className='btn btn-primary' id='EdetailsBtn'>Add to cart </Link>
                            </div>

                {/* <div className='container' id='EdetailsContainer'>

                    <div className='row' id='EdetailsRow'>

                        <div className='col-md-4' id='EdetailsCol4'>

                                {listing.images.map(image => {
                                    return (
                                        <div key={image} className='card' id='col4Card'>
                                            <img className='EdetailsImg' src={image} />
                                        </div>
                                    )
                                })}

                            <div className="card-header alert-primary" id='EdetailsHeader'>
                                <h2 >{listing.name}</h2>
                            </div>
                        </div>

                        <div className='col-md-8' id='EdetailsCol8'>

                            <div className='card' id='EdetailsSpan'>
                                <span >Price: ${listing.price}</span>
                            </div>

                            <div className='card' id='EdetailsSpan'>
                                <span>Qty: <input className='EdetailsInput' type='number'></input>  </span>
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

                            {/* <div className='card' id='col8Card'>
                                <p>Details: {listing.details}</p>
                            </div> 

                            <Link to="/" className='btn btn-warning' onClick={this.handleHomeRedirectFalse} id='EdetailsBackBtn'>Back </Link>
                            <Link to="Cart" className='btn btn-primary' id='EdetailsBtn'>Add to cart </Link> */}
                        </div>
                    </div>
    </div>

                )
            }
        }
        
export default Details;