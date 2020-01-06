import React, { Component } from 'react';
import { Button } from '@material-ui/core/';
import './Login.css';
import { Route, Link } from 'react-router-dom';
import { LoginButton, LoginInput } from './uielements/button.js'


class Login extends Component {
    render() {
        return (
            <div className="loginbgc">
                <div >
                    <Link to="/Home" className="bigStorify">
                        <h3 > Storify<p className="com">.com</p></h3>
                    </Link>
                </div>
                <div className='input' >
                    <p className="loginText"> Login Into Storify and Get Mesmarised</p>
                    <div  >
                        <LoginInput placeholder="Username" className="custom" />
                    </div>
                    <div>
                        <LoginInput placeholder="Password" className="inputSpace" type="password" />
                    </div>
                    <div className="inputSpace">
                        <Link to="/Home">
                            <LoginButton style={{backgroundColor:"#2aa20c",color:"white"}} variant="contained" >Sign In</LoginButton>
                        </Link>
                    </div>
                </div>
                <div className="newSignUp">
                    <p className="text-signup">New To Storify</p>
                    <Link  to="/Signup">
                        <Button style={{ color: "#d82e07" }} variant="outlined">Create Your Storify Account</Button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Login;
