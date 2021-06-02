import React, { Component } from 'react';
import axios from '../Pages/'

class axiosd extends Component {
    constructor(){
        super()
        this.state ={
            mydata : []
        }
    }
    componentDibMount(){
        axiosd.get('https://restcountries.eu/rest/v2/all').
        then(response=>{
            this.setState({mydata:response.data})
        }).catch((error)=>{
            console.log(error)
         } )
    }
    render() {
        
        const myList = this.state.mydata;
        const country = myList.map((myList)=>{
            return <li>{myList.name}</li>
        })
        return (
            <div>
                <ul>{country}</ul>
            </div>
        );
    }
}

export default axiosd;