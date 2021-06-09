import React, { Component } from 'react';
import { Carousel,Button } from 'antd';



class Hero extends Component {
    render() {
        const items=[
            {
                key:'softDev',
                Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                tittle:'Lets think out of the BOX'
            },

            {
                key:'softDev',
                Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                tittle:'Lets think out of the BOX'
            },
            {
                key:'softDev',
                Content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                tittle:'Lets think out of the BOX'
            }
        ]
        
        return (
            <>
            <div id='Hero' className='heroBlock'>
            <Carousel>
                {
                    items.map(data=>{
                        return(
                            <div className='container-fluid'>
                        <div className='content'>
                            <h1>{data.key}</h1>
                            <p>{data.Content}</p>
                            <div className='btnHolder'>
                                <Button size="large" type="primary">Learn More</Button>
                                <Button size="large" ><i className='fas fa-desktop'></i>watch a demo</Button>
                            </div>
                        </div>
                    </div>
                        )
                    })
    
                
          
    
    }

</Carousel>
</div>
        
  </>
        );
}
}

export default Hero;