import React, { Component } from 'react';

class Welcome extends Component {
    DoThisClass(a){
        alert(a)
    }
    render() {
        return (
            <div>
                <button onClick={this.DoThisClass.bind(this,"Hello I Am From para in class")}>Click Me From CLass</button>
                <br/><h1>Hello I am {this.props.name} , my age is {this.props.age} and I am from {this.props.home}.</h1>
            </div>
        );
    }
}

export default Welcome;