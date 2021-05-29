import React, { Component } from 'react';

class List extends Component {
    render() {

        const country=['Bangladesh','India','Chaina','Canada'];
        const dataItems= country.map((mydata)=>{
            return(
                <li>{mydata}</li>
            )
        })
        return (
            <div>
                <ol>{dataItems}</ol>
            </div>
        );
    }
}

export default List;