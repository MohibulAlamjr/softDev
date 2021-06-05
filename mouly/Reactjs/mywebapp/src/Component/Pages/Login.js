import React, { Component } from 'react';
import  Row  from 'react-bootstrap/esm/Row';
import  Col  from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button'
import  Container  from 'react-bootstrap/esm/Container';
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
        const nam='Serajum';
        const pas='2525';
        if(nam == this.state.fname && pas == this.state.pass ){
            sessionStorage.setItem("username",this.state.verify)
        }else{
           alert("Password or User-name are invalied")
        }
        
    }
    render() {
  

        return (
            <div>

               <Container>
                <form style={{textAlign:'center',marginTop:'200px'}}>

               
                   <Row className="justify-content-md-center" >
                     <Col xs lg="2">
                     <label><b>First Name:-</b></label>
                      <input  onChange={this.oneChangehandel} type="text" name='fname' placeholder='Full Name'></input> <br/>
                      <label><b>Password:-</b></label>
                    <input  onChange={this.oneChangehandel} type="password" name='pass' placeholder='Password'></input>
                  
                          </Col>
                             </Row>
                   
                    
                    <Button  style={{marginTop:'150px'}}  onClick={this.login} variant="outline-primary"><Link  to={"/contact/"+this.state.fname+"/"+this.state.pass}>Login</Link></Button>
                    </form>
                    </Container>
                  
                
            </div>
        );
    }
}

export default Login;