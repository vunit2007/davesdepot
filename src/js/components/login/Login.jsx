import React, { Component } from 'react';
import { Redirect, Link} from "react-router-dom";
import {Button} from "reactstrap";

import {
    login,
    inputChange
} from "./loginActions"


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);   
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputChange(e) {
        const { dispatch } = this.props;
        var { value, name } = e.target
        const obj = { [name]: value }
        dispatch(inputChange(obj))
    }

    handleClick(event) {
        const { dispatch, email, password} = this.props;
        event.preventDefault();
        dispatch(login({email, password}));
    }

    render() {
        const { userType, email, password, redirect, error } = this.props;
        if (redirect) {
            return <Redirect push to={`/${userType}/login`} />
        }
        return (
            <div>
                <div className="jumbotron jumbotron-fluid alert-primary" id="Amb-1">
                    <div className="container text-center">
                        <h1 className="display-3">Welcome Back!</h1>
                    </div>
                </div>                       
                <div className="container-fluid Ashortbg">    
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5" id='AloginCard'>
                            <div className="card text-center mt-5">
                                <div className="card-header alert-primary" id='AloginHeader'>
                                    <strong>Login</strong>
                                </div>
                                <form id='Alogin-form' onSubmit={this.handleClick}>
                                    <div className="card-body form-group" id='AloginBody'>
                                        <select name="userType" id="userType" defaultValue="buyer" onChange={this.handleInputChange}>
                                            <option value="buyer">Buyer</option>
                                            <option value="seller">Seller</option>
                                        </select>
                                        <br/>
                                        <br/>                  
                                        <label htmlFor="email"><strong>Email:</strong></label><br/>
                                        <input type="email" name='email' placeholder='Enter your email..' id='AloginEmail' className="form-control" onChange={this.handleInputChange}/>
                                        <br/>
                                        <label htmlFor="password"><strong>Password:</strong></label><br/>
                                        <input type="password" name='password' placeholder='Enter your password...' id='AloginPassword'  className="form-control" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="card-footer text-muted" id='AloginFooter'>
                                       <button onClick={this.handleClick} className="btn btn-primary" id='AloginBtn'>Login</button>
                                    </div>
                                    <div>
                                    Need an account? Sign up today!
                                </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        );
    }
}