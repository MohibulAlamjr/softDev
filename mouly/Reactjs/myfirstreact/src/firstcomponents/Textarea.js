import React, { Component } from 'react';

class Textarea extends Component {
constructor(){
    super();
    this.state= {
        desc : " ",
        Input : " "

    }
}

onChangeHandler = (event) =>{
    var mytext = event.target.value;
    this.setState({Input:mytext})
}


    render() {
        return (
            <div>
                   <textarea placeholder = " Write something" onChange = {this.onChangeHandler}></textarea>
                   <p>{this.state.Input}</p>
            </div>
        );
    }
}

export default Textarea;