import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, Jumbotron } from 'reactstrap';

import {
    homeGetFeatured,
    homeRedirectTrue,
    homeRedirectFalse,
} from "./homeActions";

import {
    setListingId
} from "../details/detailsActions";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickSetListingId = this.handleClickSetListingId.bind(this);
    }

    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(homeGetFeatured());
    }

    handleClickSetListingId(e){
        let {index} = e.target.dataset;
        const {dispatch} = this.props;
        dispatch(setListingId(index));
        dispatch(homeRedirectTrue());
    }

    render() {
        let { index, redirect } = this.props;
        if(!!index && redirect){
            return <Redirect push to={`/details`} />
        }

        return (
            <div>
                {this.props.listings.length > 0 && this.props.listings.map((listing, index) => {
                    if(listing.sale){
                        return (
                            <div key={listing.id} className="Eresponsive">
                                <div className="Egallery">
                                    <img className='EhomeImg dClickable'
                                        src={`${listing.images[0]}`}
                                        onClick={this.handleClickSetListingId}
                                        data-index={index}
                                        width="300" height="200"
                                    />
                                    <div className="EimgDesc">{listing.name}</div>
                                </div>
                            </div>
                        )
                    }
                    })
                }

            </div>

        )
    }
}

export default Home;