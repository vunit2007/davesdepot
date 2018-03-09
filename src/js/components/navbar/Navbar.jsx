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
                        <li className='Enavli' id='EnavLi'> <button className='EnavButton' id='EnavButton'>Home  </button> </li>
                        <li className='Enavli' id='EnavLi'> <button className='EnavButton' id='EnavButton'>Dashboard  </button> </li>
                        <li className='Enavli' id='EnavLi'> <button className='EnavButton' id='EnavButton'>Cart  </button> </li>
                        <li className='Enavli' id='EnavLi'> <button className='EnavButton' id='EnavButton'>Sign Up  </button> </li>
                        <li className='Enavli' id='EnavLi'> <button className='EnavButton' id='EnavButton'>Login  </button> </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar;