import React from "react";
import { Redirect, Link } from "react-router-dom";


import {
    inputChange,
    signUp
} from "./signupActions"

class Signup extends React.Component {
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
        const { dispatch, userType, username, email, password, name, phoneNumber, address } = this.props;
        event.preventDefault();
        dispatch(signUp({ userType, username, email, password, name, phoneNumber, address }));
    }


    render() {
        const { userType, username, email, password, name, phoneNumber, address, activeuser, activeCustomer, redirect, error } = this.props;
        console.log("redirect: ", redirect)
        if (redirect) {
            return <Redirect push to={`/${userType}/signup`} />
        }
        return (
            <div>
                <div className="jumbotron jumbotron-fluid alert-primary" id="Amb-1">
                    <div className="container text-center ">
                        <h1 className="display-3">Sign Up Today</h1>
                    </div>
                </div>

                <div className="container-fluid Ashortbg">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5" id='AsignupCard'>
                            <div className="card text-center mt-5">
                                <div className="card-header alert-primary" id='AsignupHeader'>
                                    <strong>Create An Account</strong>
                                </div>
                                <form id='Asignup-form' onSubmit={this.handleClick} autoComplete="off">
                                    <div className="card-body form-group" id='AsignupBody'>
                                    <select name="userType" id="userType" defaultValue="buyer" onChange={this.handleInputChange}>
                                            <option value="buyer">Buyer</option>
                                            <option value="seller">Seller</option>
                                        </select>
                                        <br />
                                        <br />

                                        <label htmlFor="username"><strong>Username:</strong></label><br />
                                        <input type="username" name='username' id='AusernameSignup' placeholder='Enter your Username' className="form-control" onChange={this.handleInputChange} />
                                        <br />
                                        {!!this.props.error && this.props.error === 'email' && <div>Bad Email</div>}
                                        <label htmlFor="email"><strong>Email:</strong></label><br />
                                        <input type="email" name='email' id='AemailSignup' placeholder='Enter your Email' className="form-control" onChange={this.handleInputChange} />
                                        <br />
                                        <label htmlFor="password"><strong>Password:</strong></label><br />
                                        <input type="password" name='password' id='ApasswordSignup' placeholder='Enter your Password' className="form-control" onChange={this.handleInputChange} />
                                        <br />
                                        <label htmlFor="name"><strong>Name:</strong></label><br />
                                        <input type="text" name='name' id='AnameSignup' placeholder='Enter your Name' className='form-control' onChange={this.handleInputChange} />
                                        <br />
                                        <label htmlFor="phoneNumber"><strong>Phone Number:</strong></label><br />
                                        <input type="number" name='phoneNumber' id='AphoneNumberSignup' placeholder='Enter your Phone Number' value={phoneNumber} className='form-control' onChange={this.handleInputChange} />
                                        <br />
                                        <label htmlFor="address"><strong>Address:</strong></label>
                                        <input type="text" name='address' id='AaddressSignup' placeholder='Please enter your Address' className='form-control' onChange={this.handleInputChange} />
                                    </div>
                                    <div className="card-footer text-muted" id='AsignupFooter'>
                                        <button className="btn" id='AsignupBtn' onClick={this.handleClick} >Sign Up</button>
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

export default Signup;