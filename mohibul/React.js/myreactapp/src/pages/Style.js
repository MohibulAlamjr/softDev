import React, { Component } from 'react';
import '../App.css';
import Mystyle from '../css/Mystyle.module.css'
import { Button } from '../../node_modules/antd';

class Style extends Component {
    render() {

        const myStyle={
            color:'red',
            backgroundColor:'green',
            textAlign:'center',
            padding:'20px',
            fontSize:'50px'
        }
        return (
            <div>
                <h1 style={{color:'blue',backgroundColor:'red'}}>Mohibul Alam (Inline)</h1>
                <p style={myStyle}>We are softDev (Internal)</p>
                <h1 className="myClass">React.js(Extranal)</h1>
                <p className={Mystyle.stamford}>Stamford University Bangladesh</p>
           

            </div>
        );
    }
}

export default Style;