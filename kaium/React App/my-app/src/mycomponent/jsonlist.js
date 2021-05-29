import React, { Component } from 'react';

class jsonlist extends Component {
    render() {
        const mylist=[

            {
                city : "Dhaka",
                Zip :"6000"
            },
            {
                city : "Barisal",
                Zip :"6000"
            },
            {
                city : "Barguna",
                Zip :"6000"
            }
        ]
        const dataItemsCity =mylist.map((dataCity)=>
        {
            return <option>{dataCity.city}</option>
        })
        
        const dataItemsZip =mylist.map((dataZip)=>
        {
            return <option>{dataZip.Zip}</option>
        })
        return (
            <div>
                <select>
                    {dataItemsCity}
                </select>
                <select>
                    {dataItemsZip}
                </select>
            </div>
        );
    }
}

export default jsonlist;