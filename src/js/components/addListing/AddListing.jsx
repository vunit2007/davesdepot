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
        this.state = {
            input : "AddListing"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleAddListingBtn = this.handleAddListingBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleAddListingBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(addListingBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello AddListing {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleAddListingBtn}>Change</button>
            </div>
        )
    }
}

export default AddListing;