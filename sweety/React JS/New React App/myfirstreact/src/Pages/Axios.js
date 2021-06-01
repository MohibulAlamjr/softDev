import React, { Component } from 'react';
import axios from '../../node_modules/axios';

class Axios extends Component {
    constructor(){
        super()
        this.state={
            mydata:[]
        }
    }
    componentDidMount(){
     axios.get('https://restcountries.eu/rest/v2/all').then(response=>{

         this.setState({mydata:response.data})
    }).catch(error=>{

             console.log(error);
         })
     
    }
    render() {
        const myList = this.state.mydata;
        const country = myList.map((data)=>{
            return <li> {data.name + " 's calling code is ( " + data.callingCodes[0] + ")" }<br></br><span style={{color:"red",backgroundColor:"black"}}>{data.name + "'s Capital is " + data.capital}</span> </li>

        })
        return (
            <div>
                <ul>
                    {country}
                </ul>
            </div>
        );
    }
}

export default Axios;