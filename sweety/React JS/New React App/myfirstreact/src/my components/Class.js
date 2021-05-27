import React, { Component } from 'react';
class Class extends Component{
    
constructor(){
    super()

    this.state={
        name:["Sabrina","Joy","Mouly","Kaium"],
        age:["14","20","30","60"],
        city:"Narshindi",
        gender:"female"
    }

}
render(){
    return <div>
         <h2> My Name is:{this.state.name[2]}</h2>
         <h2> My age is:{this.state.age[2]}</h2>
         <h2> My city is:{this.state.city}</h2>
         <h2> My gender is:{this.state.gender}</h2>
    </div>
}

}

export default Class;