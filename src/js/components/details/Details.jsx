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

                <div className='container' id='EdetailsContainer'>
                <h1> Easy Street Sign </h1>
                    <hr/>
                    <div className='row' id='EdetailsRow'>
                  
                        <div className = 'col-md-4' id='EdetailsCol4'>   
                            <div className = 'card' id='col4Card'> 
                                <img className ='EdetailsImg' src= 'http://ronedmondson.com/wp-content/uploads/2012/01/easy-street.jpg'   />
                            </div>
                        </div>

                        <div className = 'col-md-8' id='EdetailsCol8'>

                            <div className = 'card' id='col8Card'>
                                <span>Price: $69</span>
                            </div>

                        <div className = 'card' id='col8Card'>
                                <span>Qty: <input className='EdetailsInput' type='number'></input>  </span>
                                </div>

                        <div className = 'card' id='col8Card'>
                                <p>Description: This easy street sign is one of a kind. You will always be on easy street forever! </p>
                                </div>

                       <div className = 'card' id='col8Card'>
                                <p>Details: height-69cm width-420cm weight-4.20lbs shipping-free!</p>
                                </div>         
                            
                            <button className='EdetailsBtn'>Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Details;