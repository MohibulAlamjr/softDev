import React,{Component} from 'react'
 
class Stchange extends Component{
    constructor(){
        super()
        this.state={
            name : "mohibul"
           
           

        }
    }

    changeName(nam){
        this.setState({name:nam})


    }

    render(){
        
        return (<div>
            <h1>{this.state.name}</h1>
            <button onClick={this.changeName.bind(this,this.props.name)} className="btn btn-danger">{this.props.name}</button>
        </div>)
           
        
      
    }
}
export default Stchange;