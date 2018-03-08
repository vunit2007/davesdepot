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
        
        this.handleChangeNavbar = this.handleChangeNavbar.bind(this);
        this.handleNavbarBtn = this.handleNavbarBtn.bind(this);
    }

    handleChangeNavbar(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(navbar(input));
    }

    handleNavbarBtn(e){
        const {dispatch} = this.props;
        dispatch(navbarBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Navbar {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeNavbar}/>
                <button type="button" onClick={this.handleNavbarBtn}>Change</button>
            </div>
        )
    }
}

export default Navbar;