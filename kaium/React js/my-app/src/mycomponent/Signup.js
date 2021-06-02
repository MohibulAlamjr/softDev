import React, { Component } from 'react';

class Signup extends Component {
    constructor(){
        super();
        this.state={
            fname :"",
            lname :"",
            email :"",
            mobile :""
        }
    }
    onChangeHandler=(event)=>{
        var inputName=event.target.name;
        var inputValue =event.target.value;
        this.setState({[inputName]:inputValue});
    }
    render() {
        return (
            <div>
                <h6>FIRST NAME:{this.state.fname}</h6>
                <h6>LAST NAME:{this.state.lname}</h6>
                <h6>EMAIL:{this.state.email}</h6>
                <h6>MOBILE NO:{this.state.mobile}</h6>
                <form>
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"></input><br/><br/>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name"></input><br/><br/>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"></input><br/><br/>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile"></input><br/><br/>
                    <input name="submit" type="submit" value="Save Now"></input>
                </form>
            </div>
        );
    }
}

export default Signup;