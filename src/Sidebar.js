
import { SideBarComp } from "./SideBarComp";
import { SideBarDashboard } from "./SideBarDashboard";
import { SideBarUtil } from "./SideBarUtil";
import { useNavigate } from "react-router-dom";


export function Sidebar() {
  const navigate=useNavigate();
  return (
    <>
      <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
          <div className="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-user-graduate"></i>
          </div>
          <div className="sidebar-brand-text mx-3">STUDENT TEACHER ADMIN </div>
        </a>

        <hr className="sidebar-divider my-0" />
        <SideBarDashboard/>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
          DETAILS
        </div>

       <SideBarComp />

        <SideBarUtil />

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
          Addons
        </div>

        <li className="nav-item">
          <a onClick={()=>navigate("/Charts")} className="nav-link" href="#">
            <i className="fas fa-fw fa-calendar"></i>
            <span>Upcoming Events</span></a>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />

       
      </ul>

    </>
  );
}


