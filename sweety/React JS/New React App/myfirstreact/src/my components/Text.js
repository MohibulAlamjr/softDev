import React, { Component } from 'react';

class Text extends Component {
    constructor(){
        super();
        this.state={
            desc:" ",
            user:" "
        }
    }

    onChangeHandler=(event)=>{
        var text = event.target.value;
        this.setState({user:text})
    }
    render() {
        return (
            <div>
                <p>{this.state.user}</p>
               <textarea onChange ={this.onChangeHandler} placeholder="write text"></textarea> 
            </div>
        );
    }
}

export default Text;