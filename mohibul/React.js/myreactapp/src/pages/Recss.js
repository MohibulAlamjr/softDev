import React, { Component } from 'react';
import Newcss from '../css/Newcss.module.css';
import '../App.css';
import { Button,Input, Carousel, Radio  } from '../../node_modules/antd';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';




class Recss extends Component {
    render() {
        function onChange(a, b, c) {
            console.log(a, b, c);
          };
       const mycss ={
            color:'yellow',
            fontSize:'30px',
            backgroundColor:'green',
            textAlign:'center',
            padding: '20px'
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
                <h1 style={{color:'red',backgroundColor:'green',padding:'20px'}} >Md. Al kaium (inline CSS)</h1>
                <p style={mycss} >Sweety Akter (internal CSS)</p>
                <h1 className={Newcss.mystyle}> Serajum munira Mouly (Module CSS)</h1>
                <p className='myClass'>Mohibul Alam (Extranal CSS) </p> <br/>
                <Button type="primary">Primary Button</Button>
                <Input.Password
                    placeholder="input password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>

          
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

            <div>
                
            </div>
            </div>
            
        );
    }
}

export default Recss;