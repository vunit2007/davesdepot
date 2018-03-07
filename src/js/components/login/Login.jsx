import React from "react";
import {Link} from "react-router-dom";

import {
    login,
    loginBtn,
    loginCache
} from "./loginActions"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input : "Login"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginBtn = this.handleLoginBtn.bind(this);
    }

    handleChange(e){
        let input = e.target.value;
        let name = e.target.name;
        this.setState({
            input
        })
    }

    handleLoginBtn(e){
        let input = this.state.input;
        const {dispatch} = this.props;
        dispatch(loginBtn(input))
    }
    
    render() {

        return (
            <div>
                <h1>Hello Login {this.props.input}</h1>
                <input type="text" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleLoginBtn}>Change</button>
                <Link className="btn btn-primary" to="/">Login</Link>
            </div>
        )
    }
}

export default Login;