import React, { Component } from 'react';
import { Row, Col } from 'antd';
class Apphome extends Component {
    render() {


        const Items = [
            {
               key : '1',
               icon: <i className = 'fas fa-chart-pie'></i>,
               title:"High Performance",
               context:"cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus."
        },


        {
            key : '2',
            icon: <i class="fas fa-database"></i>,
            title:"Flat Design",
            context:"cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus."
     },

     {
        key : '3',
        icon: <i className = 'fas fa-chart-pie'></i>,
        title:"Simplified Workflow",
        context:"cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus."
 }
    ]
        return (
            <>
               <div id= "about" className = "block aboutBlock">
                   <div className = "container-fluid">
                       <div className= "titleHolder">
                          <h2>About Us</h2>
                          <p>dolor sit amet, consectetur adipisicing elit</p>
                       </div>

                       <div className ="contentHolder">
                           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.

</p>
                       </div>
                       <Row gutter={[24, 16]}>
                           {
                               Items.map(data=>{
                               return (
                                <Col span={8} key={data.key} >
                                    <div id="home" className = 'content'>
                                        <div className='icon'>
                                            {data.icon}
                                        </div>
                                         <h3>{data.title}</h3>
                                         <p>{data.context}</p>
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

export default Apphome;