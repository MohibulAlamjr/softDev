import React,{Component} from 'react'
 
class Login extends Component{
    constructor(){
        super()
        this.state={
           verifiaction:false
           

        }
    }

    render(){
        
      if (this.state.verifiaction==true){
        return( <h1>Login Successfull</h1>);
      }else{
        return( <h1>Login Falid</h1>);
      }
      
        
           
           
        
       
     
  
        
    
       
    }
}
export default Login;