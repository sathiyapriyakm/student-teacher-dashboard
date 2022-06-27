import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function TeacherMessage({ name, major, contact_number, address ,id, deleteButton,editButton}) {

  return (<div className="d-sm-flex align-items-center  mb-4" style={{width:"100%"}}>
  <Card className="student-container" sx={{height:"min-content",width:"100%",textAlign:"center"}}>
    <img className="student-poster" 
    src= "https://www.saraswatiias.com/wp-content/uploads/2018/11/dummy-profile-pic-male1.jpg"
     alt={name} />
    <CardContent>
     <div className="student-specs"> 
      <h3 className="student-name mb-4">
        {`Name: ${name}`} </h3>
        <p  className="student-rating"><b>{`Subject:`}</b> {` ${major}`}</p>
        <p  className="student-rating"><b> {`Address:`}</b>{` ${address}`}</p>
         <p  className="student-rating"><b>{`Contact number:`}</b> {` ${contact_number}`}</p>
    </div> 
    </CardContent>
      <CardActions sx={{width:"100%",textAlign:"center"}}>
      <div className="student-counter-del">
     {deleteButton}
     {editButton}
      </div>
      </CardActions>
    </Card>
    </div>
    );
}
