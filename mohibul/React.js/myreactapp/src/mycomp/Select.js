import React, { Component } from 'react';

class Select extends Component {
    constructor(){
        super()
        this.state={
            city:" ",
            auto:"Rajshahi"
        }
    }

    onChangehandeler=(event)=>{
          var val = event.target.value;
          this.setState({city:val,auto:val})
    }
    render() {
        return (
            <div>
                <p>{this.state.city}</p>
                <select onChange={this.onChangehandeler} value={this.state.auto}>
                    <option>Dhaka</option>
                    <option>Barisal</option>
                    <option>Rajshahi</option>
                    <option>Khulna</option>
                </select>
            </div>
        );
    }
}

export default Select;