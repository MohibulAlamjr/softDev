import React, { Component } from 'react';

class List extends Component {
    constructor(){
        super();
        this.state={
            name:"Banana"
        }
    }
    onChangeHandler=(event)=>{
        var a = event.target.value;
        this.setState({name:a})
    }

    MyDataChild=(data)=>{
        return <option>{data+10}</option>
    }
    render() {

        const fruits = ['Apple','Banana','Orange','Dragon'];
       const dataItems = fruits.map((this.MyDataChild));
        return (
            <div>
                    <select onChange={this.onChangeHandler} value={this.state.name}>{dataItems}</select>
            </div>
        );
    }
}

export default List;