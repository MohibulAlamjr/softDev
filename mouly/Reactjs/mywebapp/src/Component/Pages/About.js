import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

class About extends Component {

    constructor() {
        super();
        this.state={
           fname: " ",
           pass: " "
        }
        
    }
    

           
onChangeHandler = (event)=>{
    var myname = event.target.name;
    var myvalue = event.target.value;
    this.setState({[myname]:myvalue})
}
    render() {

 
        return (
            <div>

<h1>I am from about page</h1> <br/>

                <form>
                
                 <input  onChange={this.onChangeHandler} type = "text" name = "name" placeholder ="Name"></input> <br></br>
                 
                 <input  onChange={this.onChangeHandler} type = "password" name ="pass" placeholder ="pass"></input> <br></br>
               

                <Button>  <Link  to={"/contact/"+this.state.fname+ "/" + this.state.pass}>Contact</Link></Button> <br/>
                </form>
            </div>
        );
    }
}

export default About;