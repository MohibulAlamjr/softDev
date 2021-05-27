import React,{Component} from 'react'
class welcome extends Component{
    render(){
        return (
        <div><h1>I am from class Component (Name{this.props.value})</h1>
        <h2>I am from class Component 2 (Name{this.props.value})</h2>
        </div>
        )
        
        
    }
}

export default welcome