import { useState } from "react";

export const InserTableData = (props) => {
    const {setTableData} = props;
    const [currentData, setCurrentData] = useState({
        tableName: '',
        columnName: '',
        columnValue: ''
    })
    return (
        <div className="row m-0">
            <div className="col-md-12 pb-3 d-flex justify-content-center">
                <input
                    type="text"
                    name="currentData.tableName"
                    value={currentData.tableName}
                    placeholder="Table Name"
                    onChange={(e)=>{
                        let value = e.target.value;
                        setCurrentData(data=>({
                            ...data,
                            tableName: value
                        }))
                    }}
                />
            </div>
            <div className="col-md-12 pb-3 d-flex justify-content-center">
                <input
                    type="text"
                    name="currentData.columnName"
                    value={currentData.columnName}
                    placeholder="Unique Column"
                    onChange={(e)=>{
                        let value = e.target.value;
                        setCurrentData(data=>({
                            ...data,
                            columnName: value
                        }))
                    }}
                />
            </div>
            <div className="col-md-12 pb-3 d-flex justify-content-center">
                <input
                    type="text"
                    name="currentData.columnValue"
                    value={currentData.columnValue}
                    placeholder="Column Name"
                    onChange={(e)=>{
                        let value = e.target.value;
                        setCurrentData(data=>({
                            ...data,
                            columnValue: value
                        }))
                    }}
                />
            </div>
            <div className="col-md-12 d-flex justify-content-center">
                <button
                    onClick={()=>{
                        if(Object.values(currentData).every(data=>data)) {
                            setTableData(data=>([
                                ...data,
                                currentData
                            ]));
                            setCurrentData({
                                tableName: '',
                                columnName: '',
                                columnValue: ''
                            })
                        } else {
                            alert("Should be enter all the fields")
                        }
                    }}
                >
                    Manual Update
                </button>
            </div>
        </div>
    )
}