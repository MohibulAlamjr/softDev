import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { PutiConsumer } from './Myprovider';


class Subs extends Component {
    render() {
        return (
            <div>
                <Button>It's From Subs.js</Button><br/>
                <br/>
                <br/>
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

export default Subs;