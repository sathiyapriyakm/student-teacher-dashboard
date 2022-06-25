import {CardDashboard} from "./CardDashboard"
import {ChartDashboard} from "./ChartDashboard"
import ProjectIllustration from "./ProjectIllustration"
export function Dashboard(){
    return(
<>
<div className="d-sm-flex align-items-center  mb-4">
<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
<a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
</div>
<div className="row">
    <CardDashboard detail="Total number of students" value="xxx" iprop="fas fa-book-reader fa-2x text-gray-300"/>
    <CardDashboard detail="Total number of teachers" value="YYYY" iprop="fas fa-chalkboard-teacher fa-2x text-gray-300"/>  
</div>
<ChartDashboard/>
<ProjectIllustration/>
</>
);
}