import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/esm/Button';

class Login extends Component {
    login =()=>{
        sessionStorage.setItem("userName","Kaium")
    }
    render() {
       
        return (
            <div>
                <Button onClick={this.login}>Log In</Button>
            </div>
        );
    }
}

export default Login;