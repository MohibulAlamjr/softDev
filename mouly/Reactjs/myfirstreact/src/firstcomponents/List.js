import React, { Component } from 'react';

class List extends Component {

    constructor(){
        super();
        this.state = {
            fixed : "USA"
        }
    }
  
    
    onChangeHandle= (event)=>{
        var change = event.target.value;
        this.setState({fixed:change});
    }
  
myCountry = (data) =>{
    return <option>{data}</option>

}


    render() {
    const country = ['Bangladesh','Canada','USA','China'];
    const dataItem = country.map(this.myCountry);
    
        return (
            <div>
                <select onChange={this.onChangeHandle} value = {this.state.fixed}>
                    {dataItem}
                </select>
            </div>
        );
    }
}

export default List;