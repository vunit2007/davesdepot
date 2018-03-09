import React from "react";
import {Link} from "react-router-dom";

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


handleInputChange(e){
    const{dispatch} = this.props;
    var {value, name} = e.target 
    const obj = {[name]:value}
    dispatch(inputChange(obj))
}


    handleClick(event) {
        event.preventDefault();
        const { dispatch,user,username, email, password, name,  phoneNumber, address } = this.props;
        dispatch(signUp({user,username, email, password, name,  phoneNumber, address}));
    }


    render() {
        const {user,username, email, password, name, phoneNumber, address,  activeuser, activeCustomer,error} = this.props;

        return (
            <div>
                <div className="jumbotron jumbotron-fluid alert-primary mb-1">
                    <div className="container text-center ">
                        <h1 className="display-3">Sign Up Today</h1>
                    </div>
                </div>
                
                <div className="container-fluid Ashortbg">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5">
                            <div className="card text-center mt-5">
                                <div className="card-header alert-primary">
                                   <strong>Create An Account</strong>
                                </div>
                                <form id='signup-form' onSubmit={this.handleClick} autoComplete="off">
                                    <div className="card-body form-group">
                                        <select name="" id="user"  defaultValue="0" onChange={this.handleInputChange}>
                                            <option value ="0" hidden>Select Account Type</option>
                                            <option value="false">Customer</option>
                                            <option value="true">Seller</option>
                                        </select>
                                        <br />
                                        <br />
                                        
                                        <label htmlFor="username"><strong>Username:</strong></label><br/>
                                        <input type="username" name='username' id='username' placeholder='Enter your Username'  className="form-control" onChange={this.handleInputChange}/>
                                        <br/>
                                        {!!this.props.error && this.props.error === 'email' && <div>Bad Email</div>}
                                        <label htmlFor="email"><strong>Email:</strong></label><br/>
                                        <input type="email" name='email' id='email' placeholder='Enter your Email'  className="form-control" onChange={this.handleInputChange}/>
                                        <br/>
                                        <label htmlFor="password"><strong>Password:</strong></label><br/>
                                        <input type="password" name='password' id='password' placeholder='Enter your Password'  className="form-control" onChange={this.handleInputChange}/>
                                        <br/>
                                        <label htmlFor="name"><strong>Name:</strong></label><br/>
                                        <input type="text" name='name' id='name' placeholder='Enter your Name'  className='form-control' onChange={this.handleInputChange}/>
                                        <br/>
                                        <label htmlFor="phoneNumber"><strong>Phone Number:</strong></label><br/>
                                        <input type="number" name='phoneNumber' id='phoneNumber' placeholder='Enter your Phone Number' value={phoneNumber} className='form-control' onChange={this.handleInputChange}/>
                                        <br />
                                        <label htmlFor="address"><strong>Address:</strong></label>
                                        <input type="text" name='address' id='address' placeholder='Please enter your Address'  className='form-control' onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <a href='#/'><button className="btn btn-primary" type='submit'>Sign Up</button></a>
                                    </div>
                                </form>
                                <Link className="btn btn-primary" to="/">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;