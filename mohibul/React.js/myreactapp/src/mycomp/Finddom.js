import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import img1 from '../image/hh.jpg';
import img2 from '../image/download.jfif'

class Finddom extends Component {
    imgchange(){
        var image =document.getElementById('imgId');
        ReactDOM.findDOMNode(image).src=img1
    }
    render() {
        return (
            <div>
                <button onClick={this.imgchange}>image change</button> <br></br>
                <img id="imgId" src={img2}></img>
            </div>
        );
    }
}

export default Finddom;