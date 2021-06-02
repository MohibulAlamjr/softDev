import React, { Component } from 'react';

class Welcome2 extends Component {
    constructor(){
        super()
        var obj ={
            name:"Kaium",
            age:"20 ",
            hight:"5 feet 7 inch",
            arr :["28","30","45","10"],
            weight:{
                Class7 :"40",
                Class8 :"50",
                Class9 :"60"
            }
        }
        this.state= obj
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.hight}</h1>
                <h1>{this.state.arr}</h1>
                <h1>{this.state.arr[1]}</h1>
                <h1>{this.state.weight.Class7}</h1>

            </div>
        );
    }
}

export default Welcome2;