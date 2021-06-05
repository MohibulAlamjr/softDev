import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import{PutiConsumer} from "./Mycontext";

class Puti extends Component {
    render() {
        return (
            <div style={{textAlign:'center',marginTop:'200px'}}>
                <p>{this.props.name}</p>
                <h2 style={{color:'blue'}}>I am from softDev</h2>
                <Button className="btn btn-danger">Click</Button>

                <h1>
                    <PutiConsumer>
                        {
                            msg=>{
                                return msg;
                            }
                        }

                    </PutiConsumer>
                </h1>
            </div>
        );
    }
}

export default Puti;