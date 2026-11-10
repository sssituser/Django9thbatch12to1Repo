import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";
import Edit from "./components/Edit";
import Details from "./components/Details";
import Delete from "./components/Delete";
import Employees from "./components/Employees";

function App(){
  return(
    <React.Fragment>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
             <Route path="/employees" element={<Employees/>} />
            <Route path="/edit/:id" element={<Edit/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/delete/:id" element={<Delete/>} />
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  )
}
export default App;