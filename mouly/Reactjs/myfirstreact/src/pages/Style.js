import React, { Component } from 'react';
import '../App.css';
import Mystyle from '../css/Mystyle.module.css';
import { Button,Input, Carousel, Radio } from '../../node_modules/antd';
import Slider from '../pages/Slider'



class Style extends Component {

    render() {
        
const myStyle = {
    backgroundColor :"pink",
    color:"white",
    margin: "40px",
    padding : "20px"
};
   
 
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

        return (
            <div>
                <h1 style = {{ backgroundColor :'black',color:'blue'}}>Serajum Mouly(Inline)</h1>
                <h2 style = {myStyle }>Comes from Jhenaidah(Internal) </h2>
                <h1 className= "mycss">This is comes from app.css(External)</h1>
                <h1 className = {Mystyle.mysty}>This is comes from nodule.css)</h1> <br/>
                <Button type="primary">Primary Button</Button>
                <Input.Password placeholder="input password" />

         <div>



             </div>
             <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
 
            </div>
        );
    }
}

export default Style;