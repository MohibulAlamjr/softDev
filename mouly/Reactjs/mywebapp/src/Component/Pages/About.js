import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


class About extends Component {

    constructor() {
        super();
        this.state={
            fname:" ",
            pass:" "
        }
        
    }
    oneChangehandel=(event)=>{
        var inputName=event.target.name;
      var inputValue=event.target.value;
      this.setState({[inputName]:inputValue})

    }
    
    render() {

        return (
            <div>
                <h1>I am from About page</h1>
                <form>
                <input onChange={this.oneChangehandel} type="text" name='fname' placeholder='First Name'></input> <br/>
                <input onChange={this.oneChangehandel} type="password" name='pass' placeholder='pass'></input>
              
                
                <Button variant="outline-primary"><Link  to={"/contact/"+this.state.fname+"/"+this.state.pass}>Contact</Link></Button>
                </form>
                
            </div>
        );
    }
}

export default About;