import React,{Component} from 'react'

class Welcome extends Component {


     tryItClass (b){
        alert(b)
    }
    render (){
        return (
        
        <div>
            <button className= "btn btn-primary" onClick= {this.tryItClass.bind(this,this.props.district)}>Click Class</button>
            <h1>I am from {this.props.district}</h1>
        </div>
        )
    }
}

export default Welcome;