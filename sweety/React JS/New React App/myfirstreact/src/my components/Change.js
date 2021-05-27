import React, { Component } from 'react';
class Change extends Component{

    constructor(){
        super()

        this.state={
            name:"Shovhana",
            age:" "
        }
    }

    changeName(a,b){
this.setState({name:a})
this.setState({age:b})

    }

render(){

    return( <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <button onClick={this.changeName.bind(this,this.props.name,this.props.age)} className="btn btn-primary">click Here{this.props.changeName}</button>
    </div>
    )
}

}
export default Change ;