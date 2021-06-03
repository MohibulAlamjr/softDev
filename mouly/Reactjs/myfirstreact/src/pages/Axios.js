import React, { Component } from 'react';
import axios from '../../node_modules/axios'

class Axios extends Component {

    constructor(){
        super()
        this.state = {
            mydata : []
        }
    }

componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all').
    then(response=>{

        this.setState({mydata:response.data})
    }).catch(error=>{
        console.log(error);
    })
}

    render() {
        const myList= this.state.mydata;
        const country = myList.map((dataw)=>{
             return <li>{dataw.name + " 's calling code (+ "+dataw.callingCodes[0]+ ")" } <br/> <span style = {{ color:'blue'}}>{dataw.name+ " 's capital is "+ dataw.capital}</span> </li>
        })
        return (
            <div>
                <ol>
                    {country}
                </ol>
            </div>
        );
    }
}

export default Axios;