import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

function Employees(){
    let[employees,setEmployees]=useState([])

    function getEmployees(){
        axios.get('http://localhost:9001/employees')
        .then((res)=>{
            setEmployees(res.data)
        })
        .catch((error)=>{
            alert(error)
        })
    }

    useEffect(()=>{
        getEmployees()
    })

    return(
        <React.Fragment>
            <p className="h1">Employees Component</p>
            {
                JSON.stringify(employees)
            }
            <div className="container">
                {
                    employees.length>0 ?
                   <table className="table table-bordered text-center">
                        <thead className="bg-primary text-white">
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
                                            <td>

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                   </table>

                    :
                    <p className="h1">Records Not Found</p>
                }
            </div>

        </React.Fragment>
    )
}
export default Employees;