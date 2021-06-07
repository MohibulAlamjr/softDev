import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';
const { Meta } = Card;

class Appfeature extends Component {
    render() {
        const cards = [
            {
            image:image1,
            tite: "softDev image 1",
            link:'www.instagram.com'
            },
            {
             image:image2,
             tite: "softDev image 2",
             link:'www.instagram.com'
             },
             {
             image:image3,
             tite: "softDev image 3",
             link:'www.instagram.com'
             },
             {
             image:image4,
             tite: "softDev image 4",
             link:'www.instagram.com'
             },
             {
                image:image5,
             tite: "softDev image 5",
             link:'www.instagram.com'
             },
             {
             image:image6,
             tite: "softDev image 6",
             link:'www.instagram.com'
             }

            

        ]
        return (
            <>
            <div className="black featureBlock bgGray">
                <div className="container-fluid">
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