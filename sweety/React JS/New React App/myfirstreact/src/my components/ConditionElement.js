import React, { Component } from "react";
class ConditionElement extends Component{

    constructor(){
        super()

        this.state={
            login:true
        }
    }
    render(){
        return(
            this.state.login?
            (
                <h2>First portion</h2>
            )
            :
            (
                <h2>Second Portion</h2>
            )
        )
    }

}
export default ConditionElement;