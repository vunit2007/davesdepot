import React from "react";
import {Link} from "react-router-dom";

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

    handleChangeDetails(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(details(input));
    }

    handleDetailsBtn(e){
        const {dispatch} = this.props;
        dispatch(detailsBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Details {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeDetails}/>
                <button type="button" onClick={this.handleDetailsBtn}>Change</button>
            </div>
        )
    }
}

export default Details;