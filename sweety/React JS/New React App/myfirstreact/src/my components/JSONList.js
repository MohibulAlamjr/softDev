import React, { Component } from 'react';

class JSONList extends Component {


    render() {
        const List = [
            {
            name:"Shovhana",
            Age:"22"

        },
        {
            name:"Mouly",
            Age:"24"
        },
        {
            name:"Joy",
            Age:"24"
        },
        {
            name:"Kaium",
            Age:"23"
        }
        ]
        const MyDataName = List.map((data)=>{
            return <option>{" My Name is" + data.name + " " +" Age is " + data.Age}</option>

        });
        
        return (
            <div>
                <select>{MyDataName}</select>
                
            </div>
        );
    }
}

export default JSONList;