import React,{Component} from 'react'

class Setstate extends Component {


    constructor (){
        super ()

        this.state = {
            name: "Mouly"
            
        }
    }

    changeName(a){
        this.setState({name:a})
    }

render (){
    return <div>
    
    <h1>My name is {this.state.name}</h1>
    <button className= "btn btn-success" onClick={this.changeName.bind(this,this.props.name)}>{this.props.name}</button>
    
    </div>
}
  }

  export default Setstate;