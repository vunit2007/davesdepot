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
        
        this.handleChangeThanks = this.handleChangeThanks.bind(this);
        this.handleThanksBtn = this.handleThanksBtn.bind(this);
    }

    handleChangeThanks(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(thanksBtn(input));
    }

    handleThanksBtn(e){
        const {dispatch} = this.props;
        dispatch(thanksBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Thanks (home) {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeThanks}/>
                <button type="button" onClick={this.handleThanksBtn}>Change</button>
            </div>
        )
    }
}

export default Thanks;