import React from "react";
import {Link} from "react-router-dom";

import {
    signup,
    signupBtn,
    signupCache
} from "./signupActions"

class Signup extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChangeSignup = this.handleChangeSignup.bind(this);
        this.handleSignupBtn = this.handleSignupBtn.bind(this);
    }

    handleChangeSignup(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(signup(input));
    }

    handleSignupBtn(e){
        const {dispatch} = this.props;
        dispatch(signupBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Signup {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeSignup}/>
                <button type="button" onClick={this.handleSignupBtn}>Change</button>
            </div>
        )
    }
}

export default Signup;