import React, { Component } from 'react';

class Contact extends Component {

constructor({match}){
    super();
    this.state = {
        name:match.params.username,
        password:match.params.pass
    }
}

    render() {
        return (
            <div>
                <h1>I am from contact page</h1>
                <p1>{this.state.fname}</p1>
               
            </div>
        );
    }
}

export default Contact;