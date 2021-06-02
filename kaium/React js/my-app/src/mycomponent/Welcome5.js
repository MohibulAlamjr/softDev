import React, { Component } from 'react';
import ReactDOM from '../../node_modules/react-dom';

class Welcome5 extends Component {
    MyFun(){
        var container =document.getElementById("MyId");
        var element =<h3>My Name is Kaium,I am from ReactDom</h3> 
        var callback=function(){
            alert("Hi I am Callback")
        }
        ReactDOM.render(element,container,callback);
    }
    render() {
        return (
            <div>
                <button onClick={this.MyFun}>CLICK ME</button>
                <h4 id="MyId">My Name is Md AL Kaium</h4>
            </div>
        );
    }
}

export default Welcome5;