import React, { Component } from 'react';
import ReactDOM from'react-dom';

class Newdemo extends Component {


    myFun(){
        var container =document.getElementById("myID");
        var element = <h1>MY Name is Rain. i am from ReactDOM</h1> 
        var callback = function(){
            alert("Hi i am Callback");
        }
        ReactDOM.render(element,container,callback);

    }

    render() {
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id="myID">My Name Is Kaium</h1>
            </div>
        );
    }
}

export default Newdemo;
