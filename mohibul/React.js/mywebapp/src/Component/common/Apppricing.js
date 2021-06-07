import React, { Component } from 'react';
import { List, Card } from 'antd';

class Apppricing extends Component {
    render() {
        const data = [
            {
              title: 'Title 1',
            },
            {
              title: 'Title 2',
            },
            {
              title: 'Title 3',
            }
           
          ];
        return (
           
            <>
              <div className='block pricingBlock bgGray'>
                  <div className='container-fluid'>
                    <List
                        grid={{ gutter: 16, column: 3 }}
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>Card content</Card>
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