import React, { Component } from 'react';

class Text extends Component {
    constructor(){
        super()
        this.state={
            name:" ",
          
        }
    }
    
    textchangehandaler=(event)=>{
      var newName = event.target.value;
      this.setState({name:newName})
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <textarea onChange={this.textchangehandaler} ></textarea>
                
                
            </div>
        );
    }
}

export default Text;


