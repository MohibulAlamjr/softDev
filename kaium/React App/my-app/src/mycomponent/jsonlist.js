import React, { Component } from 'react';

class Jsonlist extends Component {
    render() {
        const mylist=[

            {
               name : " Dhaka",
                Zip :"Mohibul lives in "
            },
            {
               name : " Barisal",
                Zip :"Kamal lives in "
            },
            {
               name : " Barguna",
                Zip :"Salam lives in"
            }
        ]
     var dataBio = mylist.map((data)=>{
         return <option>{data.Zip + data.name}</option>
     })
       
        return (
            <div>
                <select>
                    {dataBio}
                </select>
                
                
            </div>
        );
    }
}

export default Jsonlist;