import React,{Component} from 'react'
 
class Elements extends Component{
    constructor(){
        super()
        this.state={
           verifiaction:true
           

        }
    }

    render(){
        
        return(this.state.verifiaction?
            (
                <h1>Login Successfull</h1>
            )
            :
            (
                <h1>Login faild</h1>   
            )
            
            
            
            );
     
      
        
           
           
        
       
     
  
        
    
       
    }
}
export default Elements;