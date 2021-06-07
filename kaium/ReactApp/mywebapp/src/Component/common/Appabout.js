import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Appabout extends Component {
    render() {


        const items = [
            {
              key: 'softDev',
              icon: <i className="fas fa-chart-pie"></i>,
              title: "Let's think out the box" ,
              content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
            },
            {
              key: 'softDev',
              icon: <i className="fas fa-desktop"></i>,
              title: "Let's think out the box",
              content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
            },
            {
              key: 'softDev',
              icon: <i className="fas fa-database"></i>,
              title: "Let's think out the box",
              content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
            },
          ]





        return (
            <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className="contentHolder">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.</p>
        </div>
        <Row gutter={[16, 16]}>
            {
                items.map(data=>{
                    return( <Col span={8} key={data.key}>
                        <div className="content">
                  <div className="icon">
                    {data.icon}
                  </div>
                  <h3>{data.title}</h3>
                  <p>{data.content}</p>
                </div>
                        </Col>)

                })
            }
        </Row>
        </div>
        </div>
               
  
        );
    }
}

export default Appabout;