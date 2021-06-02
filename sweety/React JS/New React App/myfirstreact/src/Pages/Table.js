import React, { Component } from 'react';
import ReactTable from 'react-table';


class Table extends Component {
    render() {
        const tableData = [{name:"Shovhana",Age:"22"},{name:"Sweety",Age:"23"},{name:"Mouly",Age:"24"}]
        const col = [{Header:"Name",accessor:"name"},{Header:"Age",accessor:"age"}]
        return (
            <div>
               < ReactTable 
               data={tableData}
               columns={col}
               defaultPageSize={2}
               pageSizeOptions={[2,4,5,6.]}
               />
            </div>
        );
    }
}

export default Table;