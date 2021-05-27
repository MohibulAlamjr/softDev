import React, { Component } from "react";
class Refresh extends Component{

    constructor(){
        super();
        this.RefreshNow=this.RefreshNow.bind(this);
    }
    RefreshNow(){
        this.forceUpdate();
    }
    render(){
        return(
            <div>
                <button onClick={this.RefreshNow}>Refresh</button>
                <h2>{Math.random()}</h2>
            </div>
        )
    }
}
export default Refresh;