import React, { Component } from 'react';

class Welcome4 extends Component {
    constructor(){
        super();
        this.state={
            login:false
        }
    }
    render() {
        // if(this.state.login===true){
        //     return (
        //         <div>
        //             <button>Login</button>
        //         </div>
        //     );
        // }
        // else{
        //     return (
        //         <div>
                    
        //             <button>Login Now</button>
        //         </div>
        //     );
        // }
       

        return(
            this.state.login? <h1>I AM FIRST</h1>:<h1>I AM Second</h1>
        )
    }
}

export default Welcome4;