import React from "react";
import {Link} from "react-router-dom";

import {
    navbar,
    navbarBtn,
    navbarCache
} from "./navbarActions"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input : "Navbar"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleNavbarBtn = this.handleNavbarBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleNavbarBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(navbarBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Navbar {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleNavbarBtn}>Change</button>
            </div>
        )
    }
}

export default Navbar;