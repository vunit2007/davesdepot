import React from "react";
import {Link} from "react-router-dom";

import {
    catbar,
    catbarBtn,
    catbarCache
} from "./catbarActions"

class Catbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input : "Catbar"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleCatbarBtn = this.handleCatbarBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleCatbarBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(catbarBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Catbar {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleCatbarBtn}>Change</button>
            </div>
        )
    }
}

export default Catbar;