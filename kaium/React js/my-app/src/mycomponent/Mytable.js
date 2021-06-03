import React, { Component } from 'react';

import ReactTable from "../../node_modules/react-table-6";
import '../../node_modules/react-table-6/react-table.css';
class Tabledata extends Component {
    render() {
        const tableData=[{name:"Mohibul",age:"24"},{name:"Mouly",age:"24"},{name:"Sweety",age:"21"},{name:"Kaium",age:"22"}];
        const col=[{Header:"Name",accessor:"name"},{Header:"Age",accessor:"age"}]
        return (
            <div>
                <ReactTable
                data={tableData}
                columns={col}
                defaultPageSize={2}
                pageSizeOptions={[2,4,6,10]}
                
                
                />
            </div>
        );
    }
}

export default Tabledata;