import React,{Component} from 'react';
    class Statevalue extends Component{
        constructor(){
            super()
            this.state={
                name:"Kaium"

            }
           
        }
         ChangeName(a){
                this.setState({name:a})

            }
        render(){
            return( 
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.ChangeName.bind(this,"Aboul")}>Change Name</button>
            </div>);
        }
    }
    export default Statevalue