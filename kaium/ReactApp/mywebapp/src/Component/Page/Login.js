import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button';

class Login extends Component {


    constructor() {
        super();
        this.state={
            fname:" ",
            pass:" ",
            vrify :"Success"
        }
        
    }
    oneChangehandel=(event)=>{
        var inputName=event.target.name;
      var inputValue=event.target.value;
      this.setState({[inputName]:inputValue})

    }

    login =()=>{
        sessionStorage.setItem("useName",this.state.vrify)
    }
    
    render() {
       
        return (
            <div>
                  <form>
                    <input onChange={this.oneChangehandel} type="text" name='fname' placeholder='First Name'></input> <br/>
                    <input onChange={this.oneChangehandel} type="password" name='pass' placeholder='pass'></input>
                  
                    
                    <Button onClick={this.login} variant="outline-primary"><Link  to={"/contact/"+this.state.fname+"/"+this.state.pass}>Contact</Link></Button>
                    </form>
               
            </div>
        );
    }
}

export default Login;