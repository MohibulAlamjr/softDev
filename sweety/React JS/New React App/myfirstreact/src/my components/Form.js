import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <p>My Form</p>
                    <label>First Name:</label>
                    <input type="text" placeholder="your first name"></input><br/><br/>
                    <label>Last Name:</label>
                    <input type="text" placeholder="your last name"></input><br/><br/>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default Form;