import React, { Component } from 'react';

class List extends Component {
    constructor(){
        super()
        this.state={
            fixed:'paiksthan'
        }
    }
   
    onchangehandler=(event)=>{
       var selc = event.target.value;
       this.setState({fixed:selc})
    }
    mydata=(data)=>{
        return <option>{data}</option>;
     
    }
    render() {
        var country = ['Bangladesh','india','paiksthan','USA'];
        var data = country.map(this.mydata)
        return (
            <div>
                <select onChange={this.onchangehandler} value={this.state.fixed}>
                    {data}
                </select>
            </div>
        );
    }
}

export default List;