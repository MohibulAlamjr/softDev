import React, { Component } from 'react';

class Select extends Component {
    constructor(){
        super();
        this.state={
            city1:"Dhaka",
            city2:"Barisal",
            city3:"Narshingdi",
            city4:"Jhinaidah",
            show:" ",
            auto:"Narshingdi"
        }
    }

    onChaneHandler = (event) =>{
        var selectValue = event.target.value;
        this.setState({show:selectValue,auto:selectValue})
    }
    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChaneHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
            </div>
        );
    }
}

export default Select;