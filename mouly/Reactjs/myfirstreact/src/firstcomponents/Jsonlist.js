import React, { Component } from 'react';

class Jsonlist extends Component {




    render() {

    const mylist = [
        {
            city : "Jhenaidah",
            name : "Mouly "
        },
        {
            city : "Dhaka",
            name : "Era "
        },
        {
            city : "Jessore",
            name : "Ema "
        },
    
    
    ]

    var full = mylist.map((data)=>{
        return <option>{data.name+ "lives in "+data.city }</option>
    })



        return (
            <div>
                
                <select>{full}</select>
            </div>
        );
    }
}

export default Jsonlist;