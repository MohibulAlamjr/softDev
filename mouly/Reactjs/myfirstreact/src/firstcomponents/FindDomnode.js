import React, { Component } from 'react';
import ReactDom from 'react-dom';
import image1 from '../image/index.jpg'
import image2 from '../image/flower.jpg'

class FindDomnode extends Component {

changeImg (){

    var Imid = document.getElementById("Imid");
    ReactDom.findDOMNode(Imid).src = image2
}

    render() {
        return (
            <div>
                <button onClick= {this.changeImg}>Change Image</button> <br></br>
                <img id= "Imid" src = {image1}></img>
            </div>
        );
    }
}

export default FindDomnode;