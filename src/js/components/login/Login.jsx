import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

import {
    login,
    loginBtn,
    loginCache
} from "./loginActions"

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleLoginBtn = this.handleLoginBtn.bind(this);
    }

    handleChangeLogin(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(login(input));
    }

    handleLoginBtn(e){
        const {dispatch} = this.props;
        dispatch(loginBtn());
    }
    
    render() {

        return (
            <div>
                <h1>Hello Login {this.props.input}</h1>
                <input type="text" onChange={this.handleChangeLogin}/>
                <button type="button" onClick={this.handleLoginBtn}>Change</button>
                <Link className="btn btn-primary" to="/">Login</Link>
            </div>
        )
    }
}

export default Login;