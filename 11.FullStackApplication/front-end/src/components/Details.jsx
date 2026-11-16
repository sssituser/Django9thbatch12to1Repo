import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details(){
  const {id} =useParams()

  const [emp,setEmp]=useState({})

  function getEmployeeById(){
    axios.get(`http://127.0.0.1:8000/employees/${id}`)
    .then((res)=>{
      setEmp(res.data)
    })
    .catch((e)=>{
      alert(e)
    })
  }
  useEffect(()=>{
    getEmployeeById()
  },[id])

  
  return(
    <React.Fragment>
      <p className="h1 text-center text-primary">Employee Details</p>
      <div className="container mt-5">
        <Link to="/employees" className="btn btn-warning btn-sm float-right">Back</Link>
        <table className="table table-bordered text-center animated jackInTheBox">
          <thead className="bg-primary text-white">
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Employee Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{emp.EmployeeId}</td>
               <td>{emp.EmployeeName}</td>
               <td>{emp.EmployeeSalary}</td>
               <Link to={`/edit/${emp.EmployeeId}`}>
                  <i className="fa fa-pen fa-2x text-warning"></i>
                </Link>
                <Link to={`/delete/${emp.EmployeeId}`}>
                   <i className="fa fa-trash fa-2x text-danger"></i>
                </Link>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}