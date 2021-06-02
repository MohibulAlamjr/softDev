import React, { Component } from 'react';

class Signup extends Component {

    constructor(){
        super()
        this.state={
            fname:" ",
            lname:" ",
            email:" ",
            number:" "
            
        }
    }
    oneChangehandel=(event)=>{
      var inputName=event.target.name;
      var inputValue=event.target.value;
      this.setState({[inputName]:inputValue})
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
    }else if(inputName==='number'){
        var namePattern =/^\d{11}$/;
        if(!namePattern.test(inputValue)){
            this.setState({number:"this is invalid"})
        }else{
          this.setState({number:"this is valid"})
        }
    }
    }
    render() {
        return (
            <div>
                <p>{this.state.fname}</p>
                <p>{this.state.lname}</p>
                <p>{this.state.email}</p>
                <p>{this.state.number}</p>
               <form>
               <input onChange={this.oneChangehandel} type="text" name='fname' placeholder='First Name'></input> <br/>
               <input onChange={this.oneChangehandel} type="text" name='lname' placeholder='Last Name'></input><br/>
               <input onChange={this.oneChangehandel} type="email" name='email' placeholder='Email'></input><br/>
               <input onChange={this.oneChangehandel} type="text" name='number' placeholder='number'></input><br/>
               <input type="submit"  value="Save Name"></input><br/>
                   
               </form> 
            </div>
        );
    }
}

export default Signup;