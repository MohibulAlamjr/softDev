import React,{Component} from 'react';
class Form extends Component{
constructor(){
    super()
    this.state={
        name:""
    }
}

onChangeHandler=(event)=>{
    var newName =event.target.value;
    this.setState({name:newName})
}

onSubmitHandler=()=>{
    alert(this.state.name)
}

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>First Form</p>
                    <p>{this.state.name}</p>
                    <input onChange={this.onChangeHandler} type="text" placeholder="Your name"></input>
                    <button className="btn btn-primary" type="submit" value="Submit Now">Submit</button>
                </form>
            </div>
        );
    }

}

export default Form;