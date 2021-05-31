import React, { Component } from 'react';
import '../App.css';

import { DatePicker} from '../../node_modules/antd';
import  '../../node_modules/antd/dist/antd.css';
import { Button } from '../../node_modules/antd';
import { Card } from '../../node_modules/antd';
import img2 from '../image/download.jfif'

class Style extends Component {
    render() {

        const { Meta } = Card;
        return (
            <div>
             
             < DatePicker/>
 
             <Button type="primary">Dashed Button</Button>
             <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={img2}/>}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,

            </div>
        );
    }
}

export default Style;