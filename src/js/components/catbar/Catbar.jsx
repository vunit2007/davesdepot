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
        
        this.handleChangeCatbar = this.handleChangeCatbar.bind(this);
        this.handleCatbarBtn = this.handleCatbarBtn.bind(this);
    }

    handleChangeCatbar(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(catbar(input));
    }

    handleCatbarBtn(e){
        const {dispatch} = this.props;
        dispatch(catbarBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Catbar {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeCatbar}/>
                <button type="button" onClick={this.handleCatbarBtn}>Change</button>
            </div>
        )
    }
}

export default Catbar;