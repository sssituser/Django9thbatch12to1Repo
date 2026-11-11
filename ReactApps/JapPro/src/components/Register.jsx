import axios from "axios";
import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";
function Register(){
    let navi = useNavigate()
    const[emply,setEmply]=useState({
        "eid":"",
        "ename":"",
        "esal":""
    })
    function updateInput(event){
        setEmply({
            ...emply,
            [event.target.name]:event.target.value
        })
    }
    function registerEmployee(event){
        event.preventDefault()
        axios.post("http://localhost:9001/employees/",emply)
        .then(()=>{
            alert("Employee Added")
            navi("/employees")
        })
        .catch((error)=>{
            alert(error)
        })
    }
    return(
        <React.Fragment>
            <p className="h1 text-center text-primary">Register</p>
            
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                           <div className="card-header bg-primary text-center text-white">
                               <h3>Register</h3>
                           </div>
                           <div className="card-body">
                            <form action="" onSubmit={registerEmployee}>
                                <div className="mb-3">
                                    <label htmlFor="">Employee ID</label>
                                    <input type="number" name='eid' value={emply.eid} onChange={updateInput} className="form-control" placeholder="Employee ID"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Employee Name</label>
                                    <input type="text" name='ename' value={emply.ename} onChange={updateInput} className="form-control" placeholder="Employee Name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Employee Salary</label>
                                    <input type="number" name='esal' value={emply.esal} onChange={updateInput} className="form-control" placeholder="Employee Salary"/>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary btn-md w-100">Save</button>
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
export default Register;