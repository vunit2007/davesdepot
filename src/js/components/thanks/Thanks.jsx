import React from "react";
import { Link } from "react-router-dom";

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

    handleChangeThanks(e) {
        let input = this.state.input;
        const { dispatch } = this.props;
        dispatch(thanksBtn(input));
    }

    handleThanksBtn(e) {
        const { dispatch } = this.props;
        dispatch(thanksBtn());
    }

    render() {

        return (
            <div>
                <div className='container'>
                    <div className='card' id='thanksCard'>
                        <h1 id='thanksText'> Thank you for your order!</h1> <br/> <h3>A confirmation has been sent to your email.</h3>
                    </div>
                </div>
                <Link to="/" className='btn btn-warning' id='EdetailsBackBtn'>Back Home</Link>
            </div>
        )
    }
}

export default Thanks;