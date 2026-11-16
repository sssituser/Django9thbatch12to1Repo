import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Edit(){
  let {id} = useParams();
  let navi = useNavigate();
  let[emp,setEmp]=useState({})

  function getEmployeeById(){
    axios.get(`http://127.0.0.1:8000/employees/${id}/`)
    .then((res)=>{
      setEmp(res.data)
    })
    .catch((e)=>alert(e))  
  }

  useEffect(()=>{
    getEmployeeById()
  },[id])

  function updateInput(e){
    setEmp({
      ...emp,
      [e.target.name]:e.target.value
    })
  }

  function save(e){
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/employees/${id}/`,emp)
    .then(()=>{
     toast.success("Employee Udated...",{
             position:"top-center",
             theme:"colored",
             autoClose:1000,
             onClose:()=>{
               navi("/employees")
             }
           })
    })
    .catch((e)=>alert(e))
  }


  return(
    <React.Fragment>
     
    
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
                <div className="card shadow-lg animated jello">
                  <div className="card-header bg-secondary text-white text-center">
                      <p className="h3">Edit Employee</p>
                  </div>
                  <div className="card-body">
                    <form action="" onSubmit={save}>
                      <div className="mb-3">
                        <input type="number" name="EmployeeId" disabled onChange={updateInput} value={emp.EmployeeId} className="form-control" placeholder="Employee Id" />
                      </div>
                       <div className="mb-3">
                        <input type="text" name="EmployeeName"  onChange={updateInput} value={emp.EmployeeName} className="form-control" placeholder="Employee Name" />
                      </div>
                       <div className="mb-3">
                        <input type="number" name="EmployeeSalary"  onChange={updateInput} value={emp.EmployeeSalary} className="form-control" placeholder="Employee Salary" />
                      </div>
                      <div className="mb-3">
                        <button className="btn btn-sm btn-secondary">Save</button>
                        <Link to={"/employees"} className="btn btn-sm btn-warning  float-right">Back</Link>
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