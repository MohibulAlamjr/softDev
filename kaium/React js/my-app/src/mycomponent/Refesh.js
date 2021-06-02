import React, { Component } from 'react';

class Refesh extends Component {
    constructor(){
        super()
        this.refeshNow= this.refeshNow.bind(this);
    }
    refeshNow(){
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <button onClick={this.refeshNow}>
                Refesh button
                </button>
                <h1>{Math.random()}</h1>
            </div>
        );
    }
}

export default Refesh;