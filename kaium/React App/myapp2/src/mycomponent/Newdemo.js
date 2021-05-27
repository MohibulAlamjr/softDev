import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Newdemo extends Component{     
 myfun(){
var container = document.getElementById("myID")
var element = <h1>My Name is Kaium</h1>
var callback = function () {

    alert("Hi I am Callback")
}
ReactDOM.render(element,container,callback);
        }
    
 render(){
        return (
        <div>
           <button onClick="{this.myfun}">Chang</button>
           <h1 id="myID"></h1>
        </div>
            
      );  
        
    }  
        
}

export default Newdemo