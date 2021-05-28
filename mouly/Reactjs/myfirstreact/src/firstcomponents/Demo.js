import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component {


myFun(){

    var container = document.getElementById("Id");
    var element =<h1>Comes from React Dom</h1>

    var callback = function (){
        alert("callback");
    }

    ReactDOM.hydrate(element,container,callback);



}


    render() {
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id = "Id">My name is Mouly</h1>
            </div>
        );
    }
}

export default Demo;