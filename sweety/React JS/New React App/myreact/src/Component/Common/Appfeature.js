import React, { Component } from 'react';
import {Row,Col} from 'antd';
import { Card } from 'antd';
import img1 from '../../assets/images/advanced-option.jpg';
import img2 from '../../assets/images/clean-design.jpg';
import img3 from '../../assets/images/easy-customise.jpg';
import img4 from '../../assets/images/great-support.jpg';
import img5 from '../../assets/images/modern-design.jpg';
import img6 from '../../assets/images/unlimited-features.jpg';

const { Meta } = Card;

class Appfeature extends Component {
    render() {
        const cards =[
            {
                image:img1,
                title:'softDev',
                link:'www.instagram.com'
            },
            {
                image:img2,
                title:'softDev',
                link:'www.facebook.com'
            },
            {
                image:img3,
                title:'softDev',
                link:'www.softDev.com'
            },
            {
                image:img4,
                title:'softDev',
                link:'www.youtube.com'
            },
            {
                image:img5,
                title:'softDev',
                link:'www.linkedin.com'
            },
            {
                image:img6,
                title:'softDev',
                link:'www.sweety.com'
            },
        ]
        return (
            <>
            <div className='block featureBlock bgGray'>
                <div className='container-fluid'>
                <Row gutter={[16, 16]}>
                    {
                        cards.map(data=>{
                            return(
                         <Col span={8}>
                     <Card
                      hoverable
                         style={{ width: 350 }}
                         cover={<img alt="example" src={data.image}/>}
                         >
                        <Meta title={data.title} description={data.link} />
                  </Card>
                   </Col>

                 )                      
             })
         }            
         </Row>
     </div>
</div>

 </>

 );

 }

}

export default Appfeature;