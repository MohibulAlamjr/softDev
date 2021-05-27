import React, { Component } from 'react'

class Constt extends Component{

    constructor(){
        super()
        this.state={
            name: "Kaium",
            age : "22",
            home : "Barguna",
            religion : "Islam"
        }
    }
    
    render(){
        return 
        <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1><br/>
            <h1>{this.state.home}</h1>
            <h1>{this.state.religion}</h1>
        </div>
            
        
        
        
        
        
    }

}

export default Constt