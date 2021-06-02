import React, { Component } from 'react';
import '../App.css';
import { Button,Input,Carousel} from '../../node_modules/antd'
import myStyle from '../CSS/MyStyle.module.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

class Style extends Component {
    render() {
        function onChange(a, b, c) {
            console.log(a, b, c);
          }
          
          const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
          };

        const myCSS={
            color:"blue",
            backgroundColor:"black",
            height:"200px",
            fontSize:"80px",
            textAlign:"center",
            padding:"45px"
        };
       
        
        return (
            <div>
                <h1 style={{color:"red",backgroundColor:"blue"}}>Style Page(inner)</h1>
                <h2 style={myCSS}>I am From softDev(internal)</h2>
                <h3 className="myStyle">I am Sweety(external)</h3>
                <p className={myStyle.softdev}>Hello softDevians(module)</p><br/>
                <Button type="primary">Primary Button</Button><br/>
                <Input.Password placeholder="input password" /><br/>


                <div>
                <Carousel afterChange={onChange}>
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
            </div>
        );
    }
}

export default Style;