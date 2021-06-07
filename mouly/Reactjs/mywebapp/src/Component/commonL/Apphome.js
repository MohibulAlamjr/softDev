import React, { Component } from 'react';
import { Row, Col } from 'antd';
class Apphome extends Component {
    render() {


        const Items = [
            {
               key : '1',
               icon: <i className = 'fas fa-chart-pie'></i>,
               title:"let's Think Out Of The Box",
               context:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea."
        },


        {
            key : '1',
            icon: <i className = 'fas fa-chart-pie'></i>,
            title:"let's Think Out Of The Box",
            context:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea."
     },

     {
        key : '1',
        icon: <i className = 'fas fa-chart-pie'></i>,
        title:"let's Think Out Of The Box",
        context:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea."
 }
    ]
        return (
            <>
               <div className = "block aboutBlock">
                   <div className = "container-fluid">
                       <div className= "titleHolder">
                          <h2>About Us</h2>
                          <p>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.</p>
                       </div>

                       <div className ="contentHolder">
                           <p>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language.A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language.</p>
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