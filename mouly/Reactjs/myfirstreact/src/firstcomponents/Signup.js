import React, { Component } from 'react';

class Signup extends Component {

    constructor(){
        super();
        this.state={
            fname : " ",
            lname : " ",
            email : " ",
            mobilenum : " "
        }
    }


onChangeHandler = (event) =>{
    var inputName = event.target.name;
    var inputValue = event.target.value;
    this.setState({[inputName] : inputValue });

     if(inputName === "fname")

     var namePattern = /^([a-zA]){2,30}$/;
     if (!namePattern.test(inputValue)){
         this.setState({fname :" First name is not valid"});
     }



   else if(inputName  === "lname")
   var namePattern = /^([a-zA]){2,30}$/;
    if (!namePattern.test(inputValue)){
    this.setState({lname :" Last name is not valid"});

    }

    



}





    render() {
        return (
            <div>
                <p>First Name:{this.state.fname}</p>
                <p>Last Name:{this.state.lname}</p>
                <p>E-mail:{this.state.email}</p>
                <p>Mobile Number:{this.state.mobilenum}</p>
                <form>
            <input onChange= {this.onChangeHandler} name = "fname" type = "text" placeholder = " First Name" ></input> <br></br>

            <input onChange= {this.onChangeHandler} name = "lname" type = "text" placeholder = " Last Name" ></input> <br></br>

            <input onChange= {this.onChangeHandler} name = "email" type = "text" placeholder = " E-mail" ></input> <br></br>

            <input onChange= {this.onChangeHandler} name = "mobilenum" type = "text" placeholder = " Mobile Number" ></input> <br></br>

            <input onChange= {this.onChangeHandler} name = "submit" type = "submit" value = " Submit Now"  ></input> <br></br>


                </form>
            </div>
        );
    }
}

export default Signup;