import React,{Component} from 'react'
 
class Welcome extends Component{
    myFun(a,b){
        alert(a+b)
    }

    render(){
    
        return  (
            <div>
                <button className="btn btn-success" onClick={this.myFun.bind(this,this.props.fname,this.props.lname)}>click</button>
                 <p>My name is {this.props.fname+" " + this.props.lname}. your age is {this.props.age}(classcomponent)</p>
            </div>
        )
    }
}
export default Welcome;