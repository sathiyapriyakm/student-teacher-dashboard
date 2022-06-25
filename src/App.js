import './App.css';
import {Sidebar} from "./Sidebar"
import {Topbar} from "./Topbar"
import {Dashboard} from "./Dashboard"
import Footer from "./Footer"
import React from "react";
import { Routes,Route,Navigate} from "react-router-dom";
import { StudentDetails } from './StudentDetails';
import { Cards } from './Cards';
import { Colors } from './Colors';
import { AddStudent } from './AddStudent';
import { Animations } from './Animations';
import { Other } from './Other';
import { Login } from './Login';
import { ForgetPassword } from './ForgetPassword';
import { Register } from './Register';
import { NotFound } from './NotFound';
import { Charts } from './Charts';
import { StudentEdit } from './StudentEdit';

function App() {
  return (
      <>
      <div id="wrapper">
          <Routes>

          <Route path="/Login" element={<Login/>}/>
          <Route path="/Forgot-Password" element={<ForgetPassword/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/" element={<MainBoard flow=""/>}/>
          <Route path="/StudentDetails" element={<MainBoard flow="StudentDetails"/>}/>
          <Route path="/Cards" element={<MainBoard flow="Cards"/>}/>
          <Route path="/Colors" element={<MainBoard flow="Colors"/>}/>
          <Route path="/AddStudent" element={<MainBoard flow="AddStudent"/>}/>
          <Route path="/Animations" element={<MainBoard flow="Animations"/>}/>
          <Route path="/Charts" element={<MainBoard flow="Charts"/>}/>
          <Route path="/Tables" element={<MainBoard flow="Tables"/>}/>
          <Route path="/404-Page" element={<MainBoard flow="404-Page"/>}/>
          <Route path="*" element={<Navigate replace to="/404-Page"/>}/>
          <Route path="/Dashboard" element={<Navigate replace to="/"/>}/>
          <Route path="/students/edit/:studentId" element={<MainBoard flow="StudentEdit"/>}/>
          <Route path="/Add-Student" element={<MainBoard flow="AddStudent"/>}/>
          </Routes>
      </div>
 </>
  );
}

export default App; 

function MainBoard({flow}){
    return (
        <>
             <div id="wrapper">
          <Sidebar/>
          <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar/>
            <div className="container-fluid">
            <section className="routes-container">
               { 
               {
                   "":<Dashboard/>,
                   "StudentDetails":<StudentDetails/>,
                   "Cards":<Cards/>,
                   "Colors":<Colors/>,
                   "AddStudent":<AddStudent/>,
                   "Animations":<Animations/>,
                   "Other":<Other/>,
                   "404-Page":<NotFound/>,
                   "Charts":<Charts/>,
                   "StudentEdit":<StudentEdit/>,
               }[flow]
               }
            </section>  
            </div>
          </div>
          <Footer/>
          </div>    
      </div></>
    );
}



