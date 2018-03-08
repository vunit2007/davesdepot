import React from "react";
import {Link} from "react-router-dom";

import {
    listings,
    listingsBtn,
    listingsCache
} from "./listingsActions"

class Listings extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChangeListings = this.handleChangeListings.bind(this);
        this.handleListingsBtn = this.handleListingsBtn.bind(this);
    }

    handleChangeListings(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(listings(input));
    }

    handleListingsBtn(e){
        const {dispatch} = this.props;
        dispatch(listingsBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Listings {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeListings}/>
                <button type="button" onClick={this.handleListingsBtn}>Change</button>
            </div>
        )
    }
}

export default Listings;