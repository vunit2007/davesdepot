import React, { Component } from 'react';
import { Redirect, Link} from "react-router-dom";
import {Button} from "reactstrap";

import {
    login,
    signUp,
    inputChange,
    loginSignUp,
    setUserType
} from "./loginActions"


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);   
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleLoginSignUp = this.handleLoginSignUp.bind(this);
        this.handleClickSignUp = this.handleClickSignUp.bind(this);
    }

    handleInputChange(e) {
        const { dispatch } = this.props;
        var { value, name } = e.target
        const obj = { [name]: value }
        dispatch(inputChange(obj))
    }

    handleClickLogin(event) {
        const { dispatch, email, password} = this.props;
        event.preventDefault();
        dispatch(login({email, password}));
    }

    handleClickSignUp(event) {
        const { dispatch, userType, username, email, password, name, phoneNumber, address } = this.props;
        event.preventDefault();
        dispatch(signUp({ userType, username, email, password, name, phoneNumber, address }));
    }

    handleLoginSignUp(){
        const {loginSignUpBoolean, dispatch} = this.props;
        dispatch(loginSignUp(loginSignUpBoolean));
    }

    render() {
        const { completeFirstAxios, dispatch, userType, email, password, redirect, error, user } = this.props;
        if(completeFirstAxios){
            dispatch(setUserType(user))
        }
        if (redirect) {
            return <Redirect push to={`/dashboard`} />
        }
        
        return (
            <div>
                <div className="jumbotron jumbotron-fluid alert-primary" id="Amb-1">
                    <div className="container text-center">
                        <h1 className="display-3">{this.props.loginSignUpBoolean ? "Login" : "SignUp"}</h1>
                    </div>
                </div>                       
                <div className="container-fluid Ashortbg">    
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5" id='AloginCard'>
                            <div className="card text-center mt-5">
                                <div className="card-header alert-primary" id='AloginHeader'>
                                    <strong>{this.props.loginSignUpBoolean ? "Login" : "SignUp"}</strong>
                                </div>
                                <form id='Alogin-form' onSubmit={this.handleClick}>
                                    <div className="card-body form-group" id='AloginBody'>
                                    {/* if loginSignUpBoolean is false show userType selection */
                                        
                                        !this.props.loginSignUpBoolean &&
                                        <div>
                                        <select name="userType" id="userType" defaultValue="buyer" onChange={this.handleInputChange}>
                                            <option value="buyer">Buyer</option>
                                            <option value="seller">Seller</option>
                                        </select>
                                        <br/>
                                        <br/>                  
                                        </div>
                                    }
                                        
                                        <label htmlFor="email"><strong>Email:</strong></label><br/>
                                        <input type="email" name='email' placeholder='Enter your email..' id='AloginEmail' className="form-control" onChange={this.handleInputChange}/>
                                        <br/>
                                        <label htmlFor="password"><strong>Password:</strong></label><br/>

                                        <input type="password" name='password' placeholder='Enter your password...' id='AloginPassword' className="form-control" onChange={this.handleInputChange}/>
                                    {/* if loginSignUpBoolean is false show signup page elements */
                                        
                                        !this.props.loginSignUpBoolean &&
                                        <div>
                                            <br />
                                            <label htmlFor="username"><strong>Username:</strong></label><br />
                                            <input type="username" name='username' id='username' placeholder='Enter your Username' className="form-control" onChange={this.handleInputChange} />
                                            <br />
                                            <label htmlFor="name"><strong>Name:</strong></label><br />
                                            <input type="text" name='name' id='name' placeholder='Enter your Name' className='form-control' onChange={this.handleInputChange} />
                                            <br />
                                            <label htmlFor="phoneNumber"><strong>Phone Number:</strong></label><br />
                                            <input type="number" name='phoneNumber' id='phoneNumber' placeholder='Enter your Phone Number' className='form-control' onChange={this.handleInputChange} />
                                            <br />
                                            <label htmlFor="address"><strong>Address:</strong></label>
                                            <input type="text" name='address' id='address' placeholder='Please enter your Address' className='form-control' onChange={this.handleInputChange} />
                                        </div>
                                    }
                                    </div>
                                        <div className="card-footer text-muted" id='AloginFooter'>
                                        {/* if loginSignUpBoolean is false show signup page elements else show only login elements */
                                            
                                            !this.props.loginSignUpBoolean ?
                                            <button className="btn btn-primary" onClick={this.handleClickSignUp}  id='AloginBtn'>Sign Up</button>
                                            :
                                            <button className="btn btn-primary" onClick={this.handleClickLogin}  id='AloginBtn'>Login</button>
                                        }
                                        </div>
                                    </form>
                                    {/* if loginSignUpBoolean is true show signup page elements else show only login elements */
                                        
                                        this.props.loginSignUpBoolean ?
                                        <div>
                                            Need an account? <span className="dClickable" onClick={this.handleLoginSignUp}>Sign up today!</span>
                                        </div>
                                        :
                                        <div>
                                            Have an account? <span className="dClickable" onClick={this.handleLoginSignUp}>Login!</span>
                                        </div>
                                    } 
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        );
    }
}