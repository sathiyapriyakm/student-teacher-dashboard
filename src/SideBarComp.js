import {useNavigate} from "react-router-dom";
import { useState } from "react";

export function SideBarComp() {
  const [show,setShow]= useState(false);
  const navigate=useNavigate();

  return (<>
    <li className="nav-item">
      <a onClick={() => setShow(!show)} className={show ? "nav-link collapsed" : "nav-link"} href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded={show ? "false" : "true"} aria-controls="collapseTwo">
        <i className="fas fa-book-reader"></i>
        <span>Students</span>
      </a>
      <div id="collapseTwo" className={show ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">STUDENT SECTION:</h6>
          <a onClick={()=>navigate("/StudentDetails")} className="collapse-item" href="#">STUDENT DETAILS</a>
          <a onClick={()=>navigate("/Cards")} className="collapse-item" href="#">ADD STUDENT</a>
          <a onClick={()=>navigate("/Cards")} className="collapse-item" href="#">STUDENT ACTIVITIES</a>
        </div>
      </div>
    </li>
  </>);
}
