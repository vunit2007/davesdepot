import React from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

import {
    updateListing,
    listingRedirectTrue
} from "./listingsActions";

import {
    setListingId
} from "../details/detailsActions";

class Listings extends React.Component {
    constructor(props) {
        super(props);

        this.handleSetListingId = this.handleSetListingId.bind(this);
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(updateListing())
    }

    handleSetListingId(e){
        const {dispatch} = this.props;
        const {index} = e.target.dataset;
        dispatch(setListingId(index));
        dispatch(listingRedirectTrue())
    }

    render() {
        let {listings, category, index, redirect} = this.props;
        let catlist = [];
        // if listings exists run code
        if (listings.length > 0 ){
            // if a category has not been selected, set all items to show
            if (category === undefined){
                listings.map(listing => {
                    listing.show = true;
                    catlist.push(listing)
                });
            } else {
                // else show only items in selected category
                listings.map(listing => {
                    if (listing.categoryId === category) {
                        listing.show = true;
                    } else {
                        listing.show = false;
                    }
                    catlist.push(listing);
                });
            }
        }

        if(!!index && redirect){
            return <Redirect push to={`/details`} />
        }

        return (
            <div>

                <center>
                    <div className="jumbotron jumbotron-fluid" id="VjumboTron">
                        <div className="container">
                            <h1 className="display-4" id="VcatTitle">{category === undefined ? "All Categories": (this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1))}</h1>
                        </div>
                    </div>
                    {catlist.map((catitem, index) => {
                        if(catitem.show){
                            return (

                                <div to="/details" key={catitem.id} className="Vitem1">
                                    <div className="Vinfo">
                                     <div className="Vimage"><img onClick={this.handleSetListingId} data-index={index} src={catitem.images[0]} height="200px" width="200px" /></div>
                                     <p>{catitem.name}</p>
                                     <p id='priceColor'>${catitem.price}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}


                </center>



            </div>
        )
    }
}

export default Listings;