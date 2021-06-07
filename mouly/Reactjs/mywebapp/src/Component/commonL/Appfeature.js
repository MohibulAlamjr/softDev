import { Col, Row } from 'antd';
import React, { Component } from 'react';
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
        const cards = [

            {
                image:img1,
                title:'Modern Design',
                link:"www.instagram.com"
            },

            
            {
                image:img2,
                title:'Clean and Elegant',
                link:"www.facebook.com"
            },

            
            {
                image:img3,
                title:'Great Support',
                link:"www.twitter.com"
            },

            
            {
                image:img4,
                title:'Easy to customise',
                link:"www.skype.com"
            },

            
            {
                image:img5,
                title:'Unlimited Features',
                 link:"www.softDev.com"
            },

            
            {
                image:img6,
                title:'Advanced Options',
                link:"www.google.com"
            },
        ]
        return (

          
            <>
            
            <div id= "features" className = "block featureblock bgGray">
                <div className = "container-fluid">
                <div className="titleHolder">
                            <h3>Key Features and Benefits</h3>
                            <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                        </div>
                <Row gutter={[16, 16]}>
                  {
                      cards.map(data=>{
                          return (
                            <Col sm={{ span: 12}} md={{ span: 8}} >

                            <Card
                      hoverable
                 style={{ width: 340 }}
                  cover={<img alt="example" src={data.image} />}
         >
                <Meta title={data.title} description={data.link} />
                   </Card>,
       
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