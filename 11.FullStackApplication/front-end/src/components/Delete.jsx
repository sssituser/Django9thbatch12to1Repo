import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";

export default function Delete(){
 let navi = useNavigate();
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

  function deleteEmployee(event){
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8000/employees/${id}/`)
    .then(()=>{
      alert("Employee Deleted")
      navi("/employees")
    }).catch((e)=>{
      alert(e)
    })
  }
 
  return(
    <React.Fragment>
      <p className="h1 text-center text-primary">Delete Employee</p>
      <div className="container mt-5">
      
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-header bg-danger text-white text-center">
                <p className="h3">Do you want to Delete ?</p>
              </div>
              <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">
                        <p className="h4">Employee Id : {emp.EmployeeId}</p>
                    </li>
                     <li className="list-group-item">
                        <p className="h4">Employee Name : {emp.EmployeeName}</p>
                    </li>
                     <li className="list-group-item">
                        <p className="h4">Employee Salary : {emp.EmployeeSalary}</p>
                    </li>
                </ul>
              </div>
              <div className="card-footer">
                  <form action="" onSubmit={deleteEmployee} >
                      <button  className="btn btn-sm btn-danger">Yes</button>
                      <Link to="/employees" className="btn btn-warning btn-sm float-right">Back</Link>
                  </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}