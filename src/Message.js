import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function Message({ name, standard, contact_number, address ,id, deleteButton,editButton}) {

  return (<Card className="student-container" sx={{height:"min-content"}}>
    <img className="student-poster" src="http://www.galaxyskills.org/wp-content/uploads/2019/02/dummy-350x350.png" alt={name} />
    <CardContent>
     <div className="student-specs"> 
      <h3 className="student-name mb-4">
        {`Name: ${name}`} </h3>
        <p  className="student-rating"> {`Class:${standard}`}</p>
        <p  className="student-rating"> {`Address:${address}}`}</p>
         <p  className="student-rating"> {`Contact number:${contact_number}`}</p>
    </div> 
    </CardContent>
      <CardActions>
      <div className="student-counter-del">
     {deleteButton}
     {editButton}
      </div>
      </CardActions>
    </Card>
    );
}
