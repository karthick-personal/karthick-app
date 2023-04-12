import React, {useState, useEffect} from 'react';
import { InserTableData } from '../../components/forms/InserTableData';
import { TableData } from '../../components/Table/TableData';

export const UpdateTableData = (props) => {
    const [tableData, setTableData] = useState([])
    return (
        <div className='container-fluid'>
            <div className='row m-0'>
                <div className='col-md-12 d-flex justify-content-center header py-3'>Create And Update Table Data</div>
                <div className='col-md-12'>
                    <InserTableData setTableData={setTableData} tableData={tableData}/>
                </div>
                <div className='col-md-12 pt-5'>
                    <TableData tableData={tableData} setTableData={setTableData}/>
                </div>
            </div>
        </div>
    )
}