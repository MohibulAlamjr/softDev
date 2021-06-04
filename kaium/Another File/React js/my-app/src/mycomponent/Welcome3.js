import React, { Component } from 'react';

class Welcome3  extends Component {
    constructor(){
        super()
        this.state={
            name:"Kaium Shorif"
        }
    }
    ChangeName(a){
        this.setState({name:a})

    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.ChangeName.bind(this,"MD AL Kaium")}>Change Name</button>
                
            </div>
        );
    }
}

export default Welcome3 ;