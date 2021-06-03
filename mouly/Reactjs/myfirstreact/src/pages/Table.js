import React, { Component } from 'react';
import axios from '../../node_modules/axios'
import ReactTable from "../../node_modules/react-table-6";
import '../../node_modules/react-table-6/react-table.css';

class Table extends Component {

    
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
        const tableData=this.state.mydata;
        const col=[{Header:"Name",accessor:"name"},{Header:"callingCodes",accessor:"callingCodes"}]
        return (
            <div>
                <ReactTable
                data={tableData}
                columns={col}
                defaultPageSize={2}
                pageSizeOptions={[2,4,6,10,12,14]}
                
                
                />
            </div>
        );
    }
}

export default Table;