import React, { Component } from 'react';
import { Collapse } from 'antd';
import {Button} from 'antd';

const { Panel } = Collapse;

class Appfaq extends Component {
    render() {
       const text=[
           {
               key:1,
               title:'Hello softDev',
               content:'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'

           },
           {
            key:2,
            title:'Hello softDev',
            content:'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'

        },
        {
            key:3,
            title:'Hello softDev',
            content:'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'

        },
        {
            key:4,
            title:'Hello softDev',
            content:'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'

        },
        {
            key:5,
            title:'Hello softDev',
            content:'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'

        },
        {
            key:6,
            title:'Hello softDev',
            content:'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'

        },
        {
            key:7,
            title:'Hello softDev',
            content:'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'

        },
       ]
        return (
            <>
              <div id='Appfaq' className='block faqBlock'>
                  <div className='container-fluid'>
                      <div className='titleHolder'>
                          <h1>Frequently Asked Questions</h1>
                          <p>Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam

                         </p>

                      </div>
                      {
                          text.map(data=>{
                              return(
                                <Collapse defaultActiveKey={['1']}>
                                <Panel header={data.title} key={data.key}>
                               <p>{data.content}</p>
                               </Panel>
                         </Collapse>
                              )

                          })
                      }
                      <div className='quickSupport'>
                          <h3>Want quick support?</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab excepturi nobis! Porro!
                         </p>
                         <Button size='large' type="primary"><i className='fas fa-envelope'></i>Email your question</Button>

                      </div>
                 
                  </div>
              </div>
            </>
        );
    }
}

export default Appfaq;