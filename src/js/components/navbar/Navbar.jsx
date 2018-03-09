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
                <Link to="/buyer/1" ><button>Buyer</button></Link>
                <Link to="/seller/5aa2c25f86ca680bf58521b0" ><button>Seller</button></Link>
            </div>
        )
    }
}

export default Navbar;