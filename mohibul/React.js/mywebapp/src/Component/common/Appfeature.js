import React, { Component } from 'react';
import { Row, Col } from 'antd';
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
        const cards=[
            {
                image: img1,
                tite:'Modern Design',
                link:'www.instagram.com'


           },
           {
                image: img2,
                tite:'Clean and Elegant',
                link:'www.facebook.com'


           },
           {
                image: img3,
                tite:'Great Support',
                link:'www.softDev.com'


            },
            {
                image: img4,
                tite:'Easy to customise',
                link:'www.twitter.com'


            },
            {
                image: img5,
                tite:'Unlimited Features',
                link:'www.zoomusa.com'


            },
            {
                image: img6,
                tite:'Advanced Options',
                link:'www.netflixe.com'
 
 
             }

        ]
        return (
            <>
                <div className='block featureBlock bgGray'>
                    <div className='container-fluid'>
                        <div className='titleHolder'>
                        <h2>Key Features and Benefits</h2>
                <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                        </div>
                    <Row gutter={[16, 16]}>
                    {
                        cards.map(data =>{
                             return(
                                <Col span={8} >
                             <Card
                                 hoverable
                                 cover={<img alt="example" src={data.image} />}
                             >
                                 <Meta title={data.tite} description={data.link} />
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