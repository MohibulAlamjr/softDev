import React, { Component } from 'react';
import { List, Card } from 'antd';
import { Button} from 'antd';

class Apppricing extends Component {
  
    render() {
        const data = [
            {
              title: 'BASIC',
              price:'$30.44',
              support:'24/7 support',
              user:'5 user',
              space:'5 GB of space',
              backup:'Safe,Reliable backup',
              access: 'Access from anywhere'
            },
            {
                
                    title: 'PREMIUM',
                    price:'$130.44',
                    support:'24/7 support',
                    user:'5 user',
                    space:'5 GB of space',
                    backup:'Safe,Reliable backup',
                    access: 'Access from anywhere'
                  
            },
            {
             
                title: 'ENTERPRISE',
                price:'$230.44',
                support:'24/7 support',
                user:'15 user',
                space:'50 GB of space',
                backup:'Safe,Reliable backup',
                access: 'Access from anywhere'
            },
           
          ];
        return (
            <>
               <div id="pricing" className= "block pricingBlock">
                   <div className = "container-fluid">
                       <div
                   className="titleHolder">
                            <h4>Choose a plan to fit your needs</h4>
                            <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
                        </div>
                   <List
    grid={{ gutter: 16, 
            xs:1,
            sm:1,
            md:3,
            lg:3,
            xl:3,
            xxl:3
    
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}></Card>
        <p>{item.price}</p>
        <p>{item.space}</p>
        <p>{item.user}</p>
        <p>{item.support}</p>
        <p>{item.backup}</p>
        <p>{item.access}</p>
        
                   <Button  type = "primary"> <i className = "fab fa-telegram-plane"></i>  Get Started</Button>

      </List.Item>
    )}
  />
                   </div>
                   
                   </div> 
            </>
        );
    }
}

export default Apppricing;