import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

class About extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        }
    }
    onchangeHandel=(event)=>{
        const val=event.target.value;
     
        const val2=event.target.value;
        this.setState({[val]:val2})
    }
    render() {
        return (
            <div>
                <h1>I am from About page</h1>
                <form>
                    <input onChange={this.onchangeHandel} type="text" name='fname' placeholder='First Name'></input><br/>
                    <input onChange={this.onchangeHandel} type="Password" name='fname' placeholder='Password'></input><br/>
                    <Button variant="btn btn-primary"><Link to={"/contact/"+ this.state.val}>Click Me</Link></Button>
                    </form>
                

            </div>
        );
    }
}

export default About;