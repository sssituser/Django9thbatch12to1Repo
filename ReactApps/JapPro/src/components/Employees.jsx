import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
function Employees(){
    const[employees,setEmployees]=useState([])
    function getEmployess(){
        axios.get("http://localhost:9001/employees")
        .then((res)=>{
            setEmployees(res.data)
        })
        .catch((error)=>{
            alert(error)
        })
    }
    useEffect(()=>{
        getEmployess()
    });
    return(
        <React.Fragment>
           <div className="container mt-5">
            {
                employees.length>0 ?
                <table className="table table-bordered table-hover text-center">
                    <caption style={{captionSide:"top",textAlign:"center"}} className="font-weight-bolder text-primary" ><h2>Employee Info</h2></caption>
                  <thead className="bg-secondary text-white">
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Salary</th>
                        <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        employees.map((emp)=>{
                            return(
                                <tr>
                                    <td>{emp.eid}</td>
                                    <td>{emp.ename}</td>
                                    <td>{emp.esal}</td>
                                    <th>
                                        <Link to={`/details/${emp.eid}`}>
                                            <i className="fa fa-eye fa-3x text-primary"></i>
                                        </Link>
                                        <Link to={`/edit/${emp.eid}`}>
                                            <i className="fa fa-pencil-square fa-3x text-warning"></i>
                                        </Link>
                                        <Link to={`/delete/${emp.eid}`}>
                                            <i className="fa fa-trash-alt fa-3x text-danger"></i>
                                        </Link>
                                    </th>
                                </tr>
                            )
                        })
                    }
                  </tbody>
                </table>
                :
                <p className="h1 text-center text-danger">Employees Not Found</p>

            }
           </div>
        </React.Fragment>
    )
}
export default Employees;