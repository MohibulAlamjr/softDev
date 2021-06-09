import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Appabout extends Component {
    render() {

        const Items=[
            {
                key:'1',
                icon : <i className='fas fa-chart-pie'></i>,
                title:"Let's Think Out of the box",
                content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  '
            },
            {
                key:'2',
                icon : <i className='fas fa-desktop'></i>,
                title:"Let's Think Out of the box",
                content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  '
            },
            {
                key:'3',
                icon : <i className='fas fa-database'></i>,
                title:"Let's Think Out of the box",
                content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  '
            }
        ]
        return (
            <>
               <div id='about' className="block aboutBlock">
                   <div className='container-fluid'>
                       <div className='titleHolder'>
                           <h2>About Us</h2>
                           <p>Let's Think Out Of the box</p>
                           </div>
                           <div className='contentHolder'>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                           </div>
                           <Row gutter={[16, 16]}>
                               {
                                Items.map(data=>{
                                    return(
                                        <Col md={{ span: 8}} key={data.key} >
                                        <div className='content'>
                                          <div className='icon'>
                                             {data.icon}
                                          </div>
                                         <h3>{data.title}</h3>
                                         <p>{data.content}</p>
                                        </div>
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

export default Appabout;