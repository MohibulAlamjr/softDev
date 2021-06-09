import React, { Component } from 'react';
import { Button, Carousel } from 'antd';



class Hero extends Component {
    render() {
        
const items = [


    {
        k:'1',
      key: 'Web and mobile payment built for developers',
      title:'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
      content:'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.'
 
 
    },
 
    
    {
        k:'2',
        key: 'Web and mobile payment built for developers',
        title:'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        content:'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.'
   
   
      },
      
    {
        k:'3',
        key: 'Web and mobile payment built for developers',
        title:'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        content:'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.'
   
   
      }
   
   
 
 
 ]
        return (
            <>
                <div id = "hero" className = "heroBlock">

                <Carousel >
                {
                 items.map(heroarray=>{
                     return (
                    <div className= "container-fluid" key ={heroarray.k} >
                        <div className="content">
                      <h3>{heroarray.key}</h3>
                      <p>{heroarray.content}</p>

                       <div className = "btnHolder">
                           <Button size = "large" type = "primary">Learn More</Button>
                           <Button size = "large"> <i className = 'fas fa-desktop'></i> Watch a Demo</Button>
                          

                       </div>
                        </div>
                    </div>
                     );
                 })

                }
    
           </Carousel>
                </div>
            </>
        );
    }
}

export default Hero;