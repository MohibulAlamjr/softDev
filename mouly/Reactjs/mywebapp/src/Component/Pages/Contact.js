import React, { Component } from 'react';
import { Redirect } from 'react-router';
class Contact extends Component {
    constructor({match}) {
        super();
        this.state={
            name:match.params.username,
            password:match.params.pass
        }
        
    }
    
    render() {

        if (sessionStorage.getItem("username")==null){
            return <Redirect to = "/login"/>
        }

        else {
            return (
                <div>
                    <h1>I am from Contact page</h1>
                    <p>your User Name is : {this.state.name}</p>
                    <p>your Password is : {this.state.password}</p>
                </div>
            );
        }
       
    }
}

export default Contact;