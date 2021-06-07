import React, { Component } from 'react';
import { List, Card, Button } from 'antd';


class Apppricing extends Component {
    render() {
        const data = [
            {
              title: 'Basic',
              price:'$29.99',
              user:'5 User',
              space:'5 GB of space',
              support:'24/7 support',
              backup:'Safe,Reliable backup',
              access:'Access from anywhere'
            },
            {
                title: 'Premium',
                price:'$99.99',
                user:'5 User',
                space:'5 GB of space',
                support:'24/7 support',
                backup:'Safe,Reliable backup',
                access:'Access from anywhere'
            },
            {
                title: 'Enterprise',
                price:'$199.99',
                user:'15 User',
                space:'50 GB of space',
                support:'24/7 support',
                backup:'Safe,Reliable backup',
                access:'Access from anywhere'
            },
        
          ];
          
        return (
            <div>
                <div className='block pricingBlock bgGray'>
                    <div classsss
                    ='container-fluid'>
                        <div className='titleHolder'>
                        <h3>Choose a plan to fit your needs
                       </h3>
                       <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim

                      </p>
                        </div>
                        
                        <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={data}
                    renderItem={item => (
                   <List.Item>
                 <Card title={item.title}></Card>
                 <p className='fonts'>{item.price}</p>
                 <p>{item.space}</p>
                 <p>{item.user}</p>
                 <p>{item.support}</p>
                 <p>{item.backup}</p>
                 <p>{item.access}</p>
                 <Button type='primary'><i className='fab fa-telegram-plane'></i>Get Start</Button>
              </List.Item>
    )}
  />,

                    </div>
                </div>
            </div>
        );
    }
}

export default Apppricing;