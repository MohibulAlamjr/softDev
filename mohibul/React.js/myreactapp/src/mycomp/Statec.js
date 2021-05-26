import React,{Component} from 'react'
 
class Statec extends Component{
    constructor(){
        super()
        this.state={
            name : ["mohibul","Mouly","sweety","kaium"],
            age :[24,24,22,23],
           

        }
    }

    render(){
        
        var rows = [];
for (var i = 0; i < this.state.name.length; i++) {
    
    rows.push(<h1>hi ,{"Your Name is " + this.state.name[i] + ".Your age is  " + this.state.age[i]}</h1>);
}
      
        
            return( <div>{rows}</div>);
           
        
       
     
  
        
    
       
    }
}
export default Statec;