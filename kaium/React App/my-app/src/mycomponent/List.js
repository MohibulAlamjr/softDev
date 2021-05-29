import React, { Component } from 'react';
class List extends Component {
     myDatachild=(data)=>{
        return (<option>{data}</option>)
    }
    render() {
        const country=['Bangladesh','India','Chaina','Canada'];
        const dataItems= country.map(this.myDatachild)
        return (
            <div>
                <select>{dataItems}</select>
            </div>
        );
    }
}
export default List;