import React from "react";
import { Message } from "./Message";
import {useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {AppContext} from './AppContext'


export function StudentDetails() {
  const { studentList,getStudentDetails,handleDeleteStudent} = useContext(AppContext)

  // const [studentList, setStudentList] = useState([]);
  const navigate=useNavigate();
  // const getStudentDetails=()=>{
  // fetch("https://62aa7f0d371180affbd633f8.mockapi.io/students",{
  //   method:"GET",
  // }
  // )
  // .then((data)=>(data.json()))
  // .then((mvs)=>setStudentList(mvs));
  // }   
  useEffect(()=>getStudentDetails(),[]);
  // const handleDeleteStudent=(deletionId)=>{
  //   fetch(`https://62aa7f0d371180affbd633f8.mockapi.io/students/${deletionId}`,{
  //   method:"DELETE",
  // }).then(()=>getStudentDetails());
  // }
  
  return <div className="student-list">
    {studentList.map((disp) => (<Message 
    key={disp.id} 
    name={disp.name} 
    standard={disp.standard} 
    contact_number={disp.contact_number} 
    address={disp.address} 
    id={disp.id}
    deleteButton={<IconButton 
    aria-label="student-delete-button" 
    color="error" 
    onClick={()=>handleDeleteStudent(disp.id)}>
    <DeleteIcon />
  </IconButton>}
  editButton={<IconButton 
    aria-label="student-edit-button" 
    color="primary" 
    onClick={()=>navigate(`/students/edit/${disp.id}`)}
    >
    <EditIcon />
  </IconButton>}
      />))}
  </div>;
}
  