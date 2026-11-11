import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
function Details(){
    let {id} = useParams()
    let[emp,setEmp]=useState({})
    function getEmployeeById(){
        axios.get(`http://localhost:9001/employees/${id}`)
        .then((res)=>{
            setEmp(res.data)
        })
        .catch((error)=>{
            alert(error)
        })
    }
    useEffect(()=>{
        getEmployeeById()
    },[id])
    return(
        <React.Fragment>
            
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="card shadow-lg animated zoomIn">
                        <div className="card-header bg-primary text-white text-center">
                            <p className="h3">
                                Employee Details
                            </p>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">

                                <li className="list-group-item">
                                  <span className="font-weight-bolder mr-5">Employee   ID</span>
                                  <span className="ml-5 font-weight-bold">{emp.eid}</span>
                                </li>

                                <li className="list-group-item">
                                  <span className="font-weight-bolder mr-5">Employee Name</span>
                                  <span className="ml-5 font-weight-bold">{emp.ename}</span>
                                </li>

                                <li className="list-group-item">
                                  <span className="font-weight-bolder mr-5">Employee Salary</span>
                                  <span className="ml-5 font-weight-bold">{emp.esal}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <Link to={'/employees'} className="btn btn-md btn-warning w-100" >Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Details;