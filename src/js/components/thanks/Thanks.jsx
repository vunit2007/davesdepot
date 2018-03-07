import React from "react";
import {Link} from "react-router-dom";

import {
    thanks,
    thanksBtn,
    thanksCache
} from "./thanksActions"

class Thanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input : "Thanks"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleThanksBtn = this.handleThanksBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleThanksBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(thanksBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Thanks (home) {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleThanksBtn}>Change</button>
            </div>
        )
    }
}

export default Thanks;