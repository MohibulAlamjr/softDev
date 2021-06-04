import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state={
            fname:" ",
            pass:" ",
            verify:"success",
            
        }
        
    }
    oneChangehandel=(event)=>{
     var inputName=event.target.name;
      var inputValue=event.target.value;
      this.setState({[inputName]:inputValue})
     

    }

    login=()=>{
        const nam='mouly';
        const pas='12345';
        if(nam == this.state.fname && pas == this.state.pass ){
            sessionStorage.setItem("userName",this.state.verify)
        }else{
           alert("Password or User name doesn't match")
        }
        
    }
    render() {
   
        return (
            <div>
                <form>
                    <input onChange={this.oneChangehandel} type="text" name='fname' placeholder='First Name'></input> <br/>
                    <input onChange={this.oneChangehandel} type="password" name='pass' placeholder='pass'></input>
                  
                    
                    <Button onClick={this.login} variant="outline-primary"><Link  to={"/contact/"+this.state.fname+"/"+this.state.pass}>Login</Link></Button>
                    </form>
                    <p>{this.state.failedm}</p>
                
            </div>
        );
    }
}

export default Login;