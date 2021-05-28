import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Renderm extends Component {

  myFun(){
      var container = document.getElementById("demo");
      var element   = <h1>I am Mohibul Alam</h1>
      var callback = function(){
          alert("hi i am from callback");
      }
      ReactDOM.hydrate(element,container,callback )
   }
    render() {


        return (
            <div>
                <h1 id="demo"> I am Joy</h1>
                <button onClick={this.myFun} className="btn btn-primary">Click to chanage</button>
                
            </div>
        );
    }
}

export default Renderm;