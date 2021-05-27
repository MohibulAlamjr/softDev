import React,{Component} from 'react'

class Element extends Component{

    constructor(){
        super ()
        this.state ={
            login : false
        }
    }




render (){
    return (

        this.state.login? (
        
        <h1>From first portion becasue it is true</h1> 
        )
        : 
        (
        <h2>From second portion because it is false</h2>
        )

    )
    }

 }
 export default Element;

