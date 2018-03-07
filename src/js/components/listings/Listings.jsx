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
        this.state = {
            input : "Listings"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleListingsBtn = this.handleListingsBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleListingsBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(listingsBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Listings {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleListingsBtn}>Change</button>
            </div>
        )
    }
}

export default Listings;