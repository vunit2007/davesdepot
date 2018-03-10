import React from "react";
import { Link } from "react-router-dom";

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

    handleChangeNavbar(e) {
        let input = e.target.value;
        const { dispatch } = this.props;
        dispatch(navbar(input));
    }

    handleNavbarBtn(e) {
        const { dispatch } = this.props;
        dispatch(navbarBtn());
    }

    render() {

        return (

            <nav className='EnavBar' id='EnavBar'>
                <h2 className='EnavTitle' id='EnavTitle'> Dave's Depot</h2>

                <div>
                    <ul className='EnavUl' id='EnavUl'>
                        <li className='Enavli' id='EnavLi'> <Link to="/" id='EnavButton'>Home  </Link> </li>
                        <li className='Enavli' id='EnavLi'> <Link to="/Dashboard" id='EnavButton'>Dashboard  </Link> </li>
                        <li className='Enavli' id='EnavLi'> <Link to="Cart" id='EnavButton'>Cart  </Link> </li>
                        <li className='Enavli' id='EnavLi'> <Link to='/Signup' id='EnavButton'>Sign Up  </Link> </li>
                        <li className='Enavli' id='EnavLi'> <Link to='Login' id='EnavButton'>Login  </Link> </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar;