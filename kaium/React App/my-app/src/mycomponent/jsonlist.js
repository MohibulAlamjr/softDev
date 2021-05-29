import React, { Component } from 'react';

class Jsonlist extends Component {
    render() {
        const mylist=[

            {
               name : "Dhaka",
                Zip :"Mohibul lives in "
            },
            {
               name : "Barisal",
                Zip :"Kamal lives in "
            },
            {
               name : "Barguna",
                Zip :"Salam"
            }
        ]
     var dataBio = mylist.map((data)=>{
         return <option>{Date.city + Date.Zip}</option>
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