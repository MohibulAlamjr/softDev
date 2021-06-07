import React, { Component } from 'react';
import {Row,Col} from 'antd';

class About extends Component {
    render() {
        const Items=[
            {
                key:'1',
                icon:<i className='fas fa-chart-pie'></i>,
                title:'Lets think out of the box',
                content:'softDev'
            },
            {
                key:'2',
                icon:<i className='fas fa-desktop'></i>,
                title:'Lets think out of the box',
                content:'softDev'
            },
            {
                key:'3',
                icon:<i className='fas fa-database'></i>,
                title:'Lets think out of the box',
                content:'softDev'
            },
        ]
        return (
            <>
                <div className='block aboutBlock'>
                        <div className='container-fluid'>
                            <div className='titleHorder'>
                                <h1>About us</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                            </div>
                            <div className='contentHolder'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                            </div>

                            <Row gutter={[16, 16]}>
                                {
                                    Items.map(data=>{
                                        return(
                                            <Col span={8} key={data.key}>
                                                <div className='content'>
                                                    <div className='icon'>
                                                        {data.icon}
                                                    </div>
                                                    <h3>{data.title}</h3>
                                                    <p>{data.title}</p>
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

export default About;