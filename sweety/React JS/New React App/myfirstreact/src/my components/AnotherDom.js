import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import picture from './image/First.jpg';
import picture1 from './image/Second.jpg';

class AnotherDom extends Component {
    changeImg(){
        var image = document.getElementById("image");
        ReactDOM.findDOMNode(image).src= picture1
    }
    render() {
        return (
            <div>
                <button onClick={this.changeImg} className="btn btn-danger">Change Image</button><br/><br/>
                <img id="image" src={picture}></img>
            </div>
        );
    }
}

export default AnotherDom;