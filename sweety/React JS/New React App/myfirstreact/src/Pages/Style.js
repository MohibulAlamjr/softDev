import React, { Component } from 'react';
import '../App.css';
import myStyle from '../CSS/MyStyle.module.css';

class Style extends Component {
    render() {

        const myCSS={
            color:"blue",
            backgroundColor:"black",
            height:"200px",
            fontSize:"80px",
            textAlign:"center",
            padding:"45px"
        }
        return (
            <div>
                <h1 style={{color:"red",backgroundColor:"blue"}}>Style Page(inner)</h1>
                <h2 style={myCSS}>I am From softDev(internal)</h2>
                <h3 className="myStyle">I am Sweety(external)</h3>
                <p className={myStyle.softdev}>Hello softDevians(module)</p>
            </div>
        );
    }
}

export default Style;