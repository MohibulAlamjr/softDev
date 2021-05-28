import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SignUp extends Component {
    
    constructor(){
        super()
        this.state={
            fname:"",
            lname:"",
            email:"",
            mobile:""

        }
    }

    onChangeHandler = (event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue});
    

        if(inputName==='fname'){
            var namePattern =/^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({fname:"this is invalid"})
            }else{
              this.setState({fname:"this is valid"})
            }
        }else if(inputName==='lname'){
          var namePattern =/^([a-zA-Z]){2,30}$/;
          if(!namePattern.test(inputValue)){
              this.setState({lname:"this is invalid"})
          }else{
            this.setState({lname:"this is valid"})
          }
      }else if(inputName==='email'){
          var namePattern =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(!namePattern.test(inputValue)){
              this.setState({email:"this is invalid"})
          }else{
            this.setState({email:"this is valid"})
          }
      }else if(inputName==='mobile'){
          var namePattern =/^\d{11}$/;
          if(!namePattern.test(inputValue)){
              this.setState({mobile:"this is invalid"})
          }else{
            this.setState({mobile:"this is valid"})
          }
      }
      }
    render() {
        return (
            <div>
                <p>First Name : {this.state.fname}</p>
                <p>Last Name : {this.state.lname}</p>
                <p>Email : {this.state.email}</p>
                <p>Mobile No : {this.state.mobile}</p>

                <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"></input><br></br>

                <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name"></input><br/>

                <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"></input><br/>

                <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile"></input><br/>
  
                <input name="submit" type="submit" placeholder="Save"></input><br/>
            </div>
        );
    }
}

export default SignUp;