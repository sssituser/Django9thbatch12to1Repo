import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
function Edit(){
    let {id} = useParams()
    let[emp,setEmp] = useState({})
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

  function updateInput(event){
    setEmp({
        ...emp,
        [event.target.name]:event.target.value
    })
  }
    return(
        <React.Fragment>
            <p className="h1 text-center text-primary">Edit - {id}</p>

           <div className="container">
             <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow-lg animated jackInTheBox">
                        <div className="card-header bg-primary text-white text-center">
                            <p className="h3">Edit Employee</p>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Employee ID</label>
                                    <input type="number" onChange={updateInput} name="eid" value={emp.eid} className="form-control" placeholder="Employee Id"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Employee Name</label>
                                    <input type="text"  onChange={updateInput} name="ename" value={emp.ename} className="form-control" placeholder="Employee Name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Employee Salary</label>
                                    <input type="number"  onChange={updateInput} name="esal" value={emp.esal} className="form-control" placeholder="Employee Salary"/>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-success btn-md w-100">Save</button>
                                    <Link to={'/employees'} className="btn btn-warning btn-md w-100">Back</Link>
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
export default Edit;