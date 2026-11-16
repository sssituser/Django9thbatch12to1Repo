import React, { useState } from "react";
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import { toast } from "react-toastify";
export default function Register(){
  const navi = useNavigate();
  const[emp,setEmp]=useState({
    "EmployeeId":"",
    "EmployeeName":"",
    "EmployeeSalary":""
  })
  function updateInput(event){
    setEmp({
      ...emp,
      [event.target.name]:event.target.value
    })
  }

  function addEmployee(e){
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/employees/",emp)
    .then(()=>{
      toast.success("Employee Added...",{
        position:"top-center",
        theme:"colored",
        autoClose:1000,
        onClose:()=>{
          navi("/employees")
        }
      })
     
    })
    .catch((e)=>{
      toast.error("Error...",{
        position:"top-center",
        theme:"colored",
        autoClose:1000,
        onClose:()=>{
          navi("/employees")
        }
      })
    })
  }

  return(
    <React.Fragment>
      
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
            <div className="col-md-5">
              <div className="card shadow-lg animated jello">
                <div className="card-header bg-secondary text-white text-center ">
                  <p className="h3">Add Employee</p>
                </div>
                <div className="card-body">
                  <form action="" onSubmit={addEmployee}>

                    <div className="mb-3">
                      <input type="number" onChange={updateInput} name="EmployeeId" value={emp.EmployeeId} className="form-control" placeholder="Employee ID"/>
                    </div>

                     <div className="mb-3">
                      <input type="text" onChange={updateInput} name="EmployeeName" value={emp.EmployeeName} className="form-control" placeholder="Employee Name"/>
                    </div>

                     <div className="mb-3">
                      <input type="text" onChange={updateInput} name="EmployeeSalary" value={emp.EmployeeSalary} className="form-control" placeholder="Employee Salary"/>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-md btn-secondary">Register</button>
                      <Link to="/employees" className="btn btn-md btn-warning float-right">Back</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}