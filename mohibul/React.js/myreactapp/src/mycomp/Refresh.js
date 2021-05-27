import React,{Component} from 'react'
 
class Refresh extends Component{
    constructor(){
        super()
        
       this.refresNow= this.refresNow.bind(this,);
       
    }

    
    refresNow(){
        this.forceUpdate();
    }



    render(){
        
     
      return(

        <div>
            <h1>{Math.random()}</h1>
            <button onClick={this.refresNow}>click  to change </button>
        </div>
      )
        
           
           
        
       
     
  
        
    
       
    }
}
export default Refresh;