import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
// import Button from 'react-bootstrap/esm/Button';
import { Button } from 'antd';
import 'antd/dist/antd.css';



class About extends Component {

    
    render() {
        
        if (sessionStorage.getItem('userName')== null){

            return <Redirect to="/Login"/>   
        }else{
            return (
                <div>
                    <h1>I am from About page</h1>
                    <Button type="primary">Primary Button</Button>
                    
                    
                </div>
            );
        }
       
    }
}

export default About;