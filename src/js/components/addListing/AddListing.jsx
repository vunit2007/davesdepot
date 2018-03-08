import React from "react";
import {Link} from "react-router-dom";

import {
    addListing,
    addListingBtn,
    addListingCache
} from "./addListingActions"

class AddListing extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChangeAddListing = this.handleChangeAddListing.bind(this);
        this.handleAddListingBtn = this.handleAddListingBtn.bind(this);
    }

    handleChangeAddListing(e){
        const {dispatch} = this.props;
        let input = e.target.value;
        dispatch(addListing(input));
    }

    handleAddListingBtn(e){
        const {dispatch} = this.props;
        dispatch(addListingBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello AddListing {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeAddListing}/>
                <button type="button" onClick={this.handleAddListingBtn}>Change</button>
                <Link to="/login"><button type="button">Login</button></Link>
            </div>
        )
    }
}

export default AddListing;