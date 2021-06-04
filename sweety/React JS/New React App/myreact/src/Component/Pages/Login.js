import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state={
            fname:" ",
            pass:" ",
            verify:"done",
            
        }
        
    }
    oneChangehandel=(event)=>{
     var inputName=event.target.name;
      var inputValue=event.target.value;
      this.setState({[inputName]:inputValue})
     

    }

    login=()=>{
        const name='Sweety';
        const pass='123434';
        if(name == this.state.fname && pass == this.state.pass ){
            sessionStorage.setItem("userName",this.state.verify)
        }else{
           alert("Password Invalid")
        }
        
    }
    render() {
   
        return (
            <div>
                <form style={{textAlign:'center',marginTop:'200px'}}>
                    <label><b>First Name:-</b></label>
                    <input onChange={this.oneChangehandel} type="text" name='fname' placeholder='First Name'></input> <br/><br/>
                    <label><b>Password:-</b></label>
                    <input onChange={this.oneChangehandel} type="password" name='pass' placeholder='password'></input><br/><br/>
                  
                    
                    <Button onClick={this.login} variant="outline-primary"><Link  to={"/contact/"+this.state.fname+"/"+this.state.pass}>Login</Link></Button>
                    </form>
                    <p>{this.state.failed}</p>
                
            </div>
        );
    }
}

export default Login;