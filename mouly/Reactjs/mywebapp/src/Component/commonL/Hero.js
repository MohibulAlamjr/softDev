import React, { Component } from 'react';
import { Button, Carousel } from 'antd';



class Hero extends Component {
    render() {
        
const items = [


    {
        k:'1',
      key: 'softDev',
      title:'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language.',
      content:'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language.'
 
 
    },
 
    
    {
        k:'2',
        key: 'softDev',
        title:'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language.',
        content:'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language.'
   
   
      },
      
    {
        k:'3',
        key: 'softDev',
        title:'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language.',
        content:'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language.'
   
   
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
                      <p>{heroarray.key}</p>
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