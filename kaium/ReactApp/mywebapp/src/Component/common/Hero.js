import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';

class Hero extends Component {
   
    render() {
        const heroarray = [
            {
              key: 'softDev',
              title: 'Web and mobile payment built for developers',
              content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
            },
            {
              key: 'softDev',
              title: 'Work better together. Schedule meetings',
              content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
            },
            {
              key: 'softDev',
              title: 'The best app to increase your productivity',
              content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
            },
          ]
        return (
            <>
            <div className="heroBlock">
           

              <Carousel>
                
                {
                    heroarray.map(Items=>{
                        return(
                            <div className="container-fluid">
                                <div className="content">
                                  <h1>{Items.key}</h1>
                                  <p>{Items.content}</p> 
                                <div className="btnHolder">
                              <Button type="primary" size="large">Learn More</Button>
                              <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                            </div>

                                </div>

                            </div>
                        )
                    })
                }
              </Carousel>,

            </div>
                
            </>
        );
    }
}

export default Hero;