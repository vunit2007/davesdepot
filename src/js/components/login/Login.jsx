import React, { Component } from 'react';
// import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

import {
    login,
    loginBtn,
} from "./loginActions"

// class Login extends React.Component {
//     constructor(props) {
//         super(props);
        
//         this.handleChangeLogin = this.handleChangeLogin.bind(this);
//         this.handleLoginBtn = this.handleLoginBtn.bind(this);
//     }

//     handleChangeLogin(e){

//         let input = e.target.value;
//         const {dispatch} = this.props;
//         dispatch(login(input));
//     }

//     handleLoginBtn(e){
//         const {dispatch} = this.props;
//         dispatch(loginBtn());
//     }
    
//     render() {

//         return (
//             <div>
//                 <h1>Hello Login {this.props.input}</h1>
//                 <input type="text" onChange={this.handleChangeLogin}/>
//                 <button type="button" onClick={this.handleLoginBtn}>Change</button>
//                 <Link className="btn btn-primary" to="/">Login</Link>
//             </div>
//         )
//     }
// }

// export default Login;







// import React, { Component } from 'react';
// import {
//     userLoginToggle,
//     updateLoginUsername,
//     updateLoginPassword,
//     loginAuth,
// } from '../actions/loginActions';
// import NavBar from '../index/navBarIndex';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleToggle(event) {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(userLoginToggle(value));
    }

    handleUsernameInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateLoginUsername(value));
    }

    handlePasswordInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateLoginPassword(value));
    }

    handleClick(event) {
        event.preventDefault();
        const { dispatch, user, email, password } = this.props;
        dispatch(loginAuth(email, password, user));
    }
    render() {
        const {user, email, password, activeuser, activeBuyer} = this.props;
        return (
            <div>
                <div className="jumbotron jumbotron-fluid alert-primary mb-0">
                    <div className="container text-center">
                        <h1 className="display-3">Login</h1>
                    </div>
                </div>                       
                <div className="container-fluid Ashortbg">    
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5">
                            <div className="card text-center mt-5">
                                <div className="card-header alert-primary">
                                    <strong>Login</strong>
                                </div>
                                <form id='login-form' onSubmit={this.handleClick}>
                                    <div className="card-body form-group">
                                        <select name="" id="user" value={user} onChange={this.handleToggle}>
                                            <option defaultValue hidden>Select Account Type</option>
                                            <option value="false">Buyer</option>
                                            <option value="true">user</option>
                                        </select>
                                        <br/>
                                        <br/>                  
                                        <label htmlFor="username"><strong>Email:</strong></label><br/>
                                        <input type="email" name='username' placeholder='Enter your email..' value={email} className="form-control" onChange={this.handleUsernameInput}/>
                                        <br/>
                                        <label htmlFor="password"><strong>Password:</strong></label><br/>
                                        <input type="password" name='password' placeholder='Enter your password...' value={password} className="form-control" onChange={this.handlePasswordInput}/>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <a href='#/'><button className="btn btn-primary">Sign In</button></a>
                                    </div>
                                </form>
                                <div>
                                    Need an account? <Link className="btn btn-primary" to="/Signup">Signup</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        );
    }
}