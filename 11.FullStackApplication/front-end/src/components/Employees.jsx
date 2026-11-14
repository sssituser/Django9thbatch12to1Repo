import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
export default function Employees(){
  
  const[emps,setEmps]=useState([])
  
  function getEmployees(){
    axios.get("http://127.0.0.1:8000/employees/")
    .then((res)=>{
      setEmps(res.data)
    })
    .catch((e)=>{
      alert(e)
    })
  }

  useEffect(()=>{
    getEmployees()
  },[])

  return(
    <React.Fragment>
      
     
      <div className="container mt-5">

         <Link to={'/register'} className="btn btn-sm btn-outline-primary">Create</Link>
        {
          emps.length>0 ?
          <table className="table table-bordered table-hover text-center shadow-lg animated zoomIn">
            <thead className="bg-primary text-white">
              <tr>
                <th>
                  Employee ID
                </th>
                <th>
                  Employee Name
                </th>
                <th>
                  Employee Salary
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {
                emps.map((emp)=>{
                  return(
                    <tr>
                      <td>{emp.EmployeeId}</td>
                      <td>{emp.EmployeeName}</td>
                      <td>{emp.EmployeeSalary}</td>
                      <td>
                        <Link to={`/details/${emp.EmployeeId}`}>
                          <i className="fa fa-eye fa-2x text-secondary"></i>
                        </Link>
                          <Link to={`/edit/${emp.EmployeeId}`}>
                          <i className="fa fa-pen fa-2x text-warning"></i>
                        </Link>
                          <Link to={`/delete/${emp.EmployeeId}`}>
                          <i className="fa fa-trash fa-2x text-danger"></i>
                        </Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          :
          <p className="h1 text-center">Employees Not Found</p>
        }
      </div>
    </React.Fragment>
  )
}