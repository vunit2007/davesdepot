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
        this.state = {
            input : "Signup"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSignupBtn = this.handleSignupBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleSignupBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(signupBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Signup {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleSignupBtn}>Change</button>
            </div>
        )
    }
}

export default Signup;