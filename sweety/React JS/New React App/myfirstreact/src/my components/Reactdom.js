import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Reactdom extends Component {

    myFun(){
        var container = document.getElementById("id01");
        var element = <h1>hi,I am from ReactDom</h1>
        var callback = function(){
            alert("Hi,I am from ReactDom");
        
        }
    ReactDOM.render(element,container,callback);
    }

    render() {
        return (
            <div>
                <button onClick={this.myFun} className="btn btn-primary">Change here</button>
                <h1 id="id01">i am from Narshingdi</h1>
            </div>
        );
    }
}

export default Reactdom;