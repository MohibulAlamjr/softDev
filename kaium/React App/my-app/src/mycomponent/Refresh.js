import React,{Component} from 'react';
    class Refresh extends Component{

            constructor(){
                super();
                this.refreshNow=this.refreshNow.bind(this)
            }
        refreshNow(){
            this.forceUpdate();
        }

        render(){
            return( <div> <br/>
                <button onClick={this.refreshNow}>Refresh Button</button>
                <h1>{Math.random()}</h1>
            </div>
            )
        }
    }
    
    export default Refresh