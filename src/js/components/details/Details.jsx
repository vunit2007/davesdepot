import React from "react";
import { Link } from "react-router-dom";

import {
    details,
    detailsBtn,
    detailsCache
} from "./detailsActions"

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeDetails = this.handleChangeDetails.bind(this);
        this.handleDetailsBtn = this.handleDetailsBtn.bind(this);
    }

    handleChangeDetails(e) {
        let input = e.target.value;
        const { dispatch } = this.props;
        dispatch(details(input));
    }

    handleDetailsBtn(e) {
        const { dispatch } = this.props;
        dispatch(detailsBtn());
    }

    render() {

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

                        </div>
                    </div>
    </div>

                )
            }
        }
        
export default Details;