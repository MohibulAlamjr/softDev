import React, { Component } from 'react';

class Jsonlist extends Component {
    render() {
       var  myArray=[
            {
                city:'Rajshahi',
                name:'mohibul'
            },
            {
                city:'Khulna',
                name:'Mouly'
            },
            {
                city:'Barisal',
                name:'kaium'
            },
            {
                city:'dhaka',
                name:'Sweety'
            }
        ]
        var dataBio=myArray.map((data)=>{
            return <option>{data.name +" lives in " + data.city}</option>
        })
        

        return (
            <div>
                <select>{dataBio}</select>
                
            </div>
        );
    }
}

export default Jsonlist;