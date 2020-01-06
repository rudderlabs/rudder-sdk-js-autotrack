import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core/';
import './Signup.css';
import './Login.css'
import { Link } from 'react-router-dom';
import signupButton from './uielements/signupButton.js';

class Signup extends Component {
    render() {
        return (
            <div>
                <div >
                    <Link to="/Home" className="bigStorify">
                        <h3 > Storify<p className="com">.com</p></h3>
                    </Link>
                </div>
                <div className="signUp">
                    <div className="signUp" style={{ display: "inline" }}>
                        <p style={{ display: "inline" }}> Name :   </p>
                        <Input placeholder="First Name" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <Input placeholder="Last Name" />
                    </div>
                    <div className="signUp">
                        <p style={{ display: "inline" }}> Mail Address:   </p>
                        <Input placeholder="Enter your mail id" />
                    </div>
                    <div className="signUp">
                        <p style={{ display: "inline" }}> Password :   </p>
                        <Input placeholder="Create password" type="password" />
                        <br /><br />
                        <p style={{ display: "inline" }}> Confirm :   </p>
                        <Input placeholder="Confirm Password" type="password" />
                    </div>
                    <div className="signUp">
                        <Link to="/Login">
                            <Button color="secondary" variant="contained" style={{background:"#17ad8d", fontFamily:"monospace",fontSize:"16px"}}>Create My Storify Account</Button>
                        </Link>
                    </div>
                    <p className="gotoLogin">Already Have an Account?<Link to="/Login" style={{ color: "blue" }}>Signin</Link></p>
                </div>
            </div>
        )
    }
}

export default Signup;