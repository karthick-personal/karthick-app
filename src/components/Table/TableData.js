
export const TableData = (props) => {
    const {tableData = [], setTableData} = props;
    return (
        <div className="row m-0">
            <div className='col-md-2'></div>
            <div className="col-md-8 pt-3">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='bg-warning'>Table Name</th>
                            <th className='bg-warning'>Column Name</th>
                            <th className='bg-success'>Distinct Value</th>
                            <th className='bg-orange'>User Input</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData?.length ?
                                tableData.map((data, index)=>
                                    <tr key={index}>
                                        <td>{data.tableName}</td>
                                        <td>{data.columnName}</td>
                                        <td>{data.columnValue}</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="tableData.userInput"
                                                value={tableData[index].userInput}
                                                onChange={(e)=>{
                                                    let value = e.target.value;
                                                    let tableList = tableData;
                                                    tableList[index].userInput = value;
                                                    setTableData([...tableList])
                                                }}
                                            />
                                        </td>
                                    </tr>
                                )
                            : ""
                        }
                    </tbody>
                </table>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-12 d-flex justify-content-center'>
                <button
                    onClick={()=>{
                        let updateTableValues = tableData;
                        updateTableValues = updateTableValues.map((curr)=>{
                            return {
                                ...curr,
                                columnValue: curr.userInput,
                                userInput: ''
                            }
                        });
                        setTableData([...updateTableValues])
                    }}
                >Update</button>
            </div>
        </div>
    )
}