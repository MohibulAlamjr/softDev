import React, { Component } from 'react';

class Select extends Component {

  constructor(){
      super();
      this.state = {

      city1 : "Jhenaidah",
      city2 : "Khustia",
      city3 : "Jessore",
      city4 : "Khulna",
      show : " ",
      auto : "Jhenidah"
      
      }
  }




  onChangeHandler = (event) =>{
      var Selectedvalue = event.target.value;
      this.setState({show:Selectedvalue, auto:Selectedvalue})
  }
    render() {
        return (
            <div>
                
        <p>{this.state.show}</p>
        <select onChange = {this.onChangeHandler} value = {this.state.auto}>
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