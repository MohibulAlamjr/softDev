import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state={
            name:" "
        }
    }
    changehandler=(event)=>{
        var newName = event.target.value;
        this.setState({name:newName})
    }

    onsubhandler=(event)=>{
        
     alert(this.state.name)
    }
    render() {
        return (
            <div>
                <p>look the change</p>
                <p>{this.state.name}</p>
                <form onSubmit={this.onsubhandler}>
                <input onChange={this.changehandler}  type="text"  id="total" placeholder="name"></input><br></br>
                <input on type="Submit"  id="total" value="Submite name"></input>
                </form>
            </div>
        );
    }
}

export default Form;