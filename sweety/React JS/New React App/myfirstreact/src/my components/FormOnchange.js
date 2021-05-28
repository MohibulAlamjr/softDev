import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FormOnchange extends Component {

    constructor(){
        super()
        this.state={
            username:" "

        }
    }
    onChangeHandler = (event) =>{
        var newName = event.target.value;
        this.setState({name:newName})
    }

    onSubmitHandler=()=>{
        alert(this.state.name)
    }
    render() {
        return (
            <div>
                <form onSubmit= {this.onSubmitHandler}>
                    <p>My Form</p>
                    <p>{this.state.name}</p>
                    <input onChange={this.onChangeHandler} type="text" placeholder="your name"></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default FormOnchange;