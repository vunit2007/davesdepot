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
        this.state = {
            input : "Details"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleDetailsBtn = this.handleDetailsBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleDetailsBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(detailsBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Details {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleDetailsBtn}>Change</button>
            </div>
        )
    }
}

export default Details;