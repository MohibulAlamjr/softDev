import React, { Component } from 'react';

class Form extends Component {

 constructor(){
     super()
     this.state ={
         username : ""
     }
 }


    onChangeHandler = (event)=>{
        var myname = event.target.name;
        var myvalue = event.target.value;
        this.setState({[myname]:myvalue})
    }
onSubmitHandler = ()=>{
    alert(this.state.username)
}

    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmitHandler}>
                    <p>{this.state.username}</p>
             <input name = " username" onChange={this.onChangeHandler} type = "text" placeholder ="Name"></input> <br></br>
             <input type = "submit" value = "Submit"></input>

                </form>
            </div>
        );
    }
}

export default Form;