import React, { Component } from 'react';

class Contact extends Component {
    constructor({match}){
        super();
            this.state={
                name: match.params.username,
                password:match.params.pass

            
            }
    }
    render() {
        return (
            <div>
                <h1>I am From Contact Page</h1>
                <p>{this.state.val}</p>
            </div>
        );
    }
}

export default Contact;