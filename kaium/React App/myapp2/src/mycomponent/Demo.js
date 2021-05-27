import React, { Component } from 'react'
class Demo extends Component{

    constructor(){
        super()
        this.state={
            name:"Kaium"
        }
    }
    changName(a){

    }
    render(){
        return <div><h1>{this.state.name}</h1>
        <button onClick={}>Change Name</button>
        </div>
    }
}