import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';

class Hero extends Component {
    render() {
  const heroarray=[
      {
          k:1,
        key:'softDev',
        contant:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        title: "Let's Think Out of the box"
         

      },
      {
        k:2,
        key:'softDev',
        contant:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        title: "Let's Think Out of the box"
         

      },
      {
        k:3,
        key:'softDev',
        contant:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        title: "Let's Think Out of the box"
         

      }
  ]
       
        return (
            <>
                <div className="heroBlock">
                    <Carousel >
                       {
                           heroarray.map(Item=>{
                               return(
                                 <div className='container-fluid' key={Item.k}>
                                     <div className='content'>
                                         <h1>{Item.key}</h1>
                                         <p>{Item.contant}</p>
                                         <div className='btnHolder'>
                                            <Button size="large" type="primary">Learn More</Button>
                                            <Button  size='large'><i className='fas fa-desktop'></i> Watch a Demo</Button>
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