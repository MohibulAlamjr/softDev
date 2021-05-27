import React,{Component} from 'react'

class State extends Component {


    constructor (){
        super ()

        this.state = {
            name: ["Serajum","Munira","Mouly"],
            district:"Jhenaidah",
            age : ["24","25","43","34"],
            weight : {
                class10 : ["35", "24","43"],
                class11 : 40,
                class12 : 45
            }
        }
    }

render (){
    return <div>
    
    <h1>My name is {this.state.name[2]}</h1>
    <h1>My district is {this.state.district}</h1>
    <h1>My age is {this.state.age[3]}</h1>
    <h1>My weight is {this.state.weight.class10[2]}</h1>
    </div>
}
  }

  export default State;