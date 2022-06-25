import React from "react";
// import { LineChart,BarChart,PieChart,Pie,Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data= [
//     {Month:"Jan",value:0},
//     {Month:"Feb",value:10000},
//     {Month:"Mar",value:5000},
//     {Month:"Apr",value:15000},
//     {Month:"May",value:10000},
//     {Month:"Jun",value:20000},
//     {Month:"Jul",value:15000},
//     {Month:"Aug",value:25000},
//     {Month:"Sep",value:20000},
//     {Month:"Oct",value:30000},
//     {Month:"Nov",value:25000},
//     {Month:"Dec",value:40000},
// ];

// const data1=[
//     {Source:"Direct",value:55},
//     {Source:"Referral",value:30},
//     {Source:"Social",value:15},
// ]



export function Charts() {
    return (
        <>
            <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800">Charts</h1>
                <p class="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                    The charts below have been customized - for further customization options, please visit the <a
                        target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js
                        documentation</a>.</p>
                <div class="row">

                    <div class="col-xl-8 col-lg-7">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-area">
                            {/* <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data} width={500} height={300}>
                                <Line dataKey="value" stroke="#8884d8" />
                                <XAxis dataKey="Month" />
                                <YAxis dataKey="value"/>
                                <Tooltip />
                                </LineChart>
                            </ResponsiveContainer> */}
                                </div>
                                <hr />
                                Styling for the area chart can be found in the
                                <code>/js/demo/chart-area-demo.js</code> file.
                            </div>
                        </div>
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-bar"> 
                                {/* <ResponsiveContainer width="100%" height="100%">
                                    <BarChart width={500} height={600} data={data}>
                                        <Bar dataKey="value" fill="green" />
                                        <XAxis dataKey="Month" />
                                        <YAxis />
                                    </BarChart>
                                </ResponsiveContainer> */}
                            </div>
                                <hr />
                                Styling for the bar chart can be found in the
                                <code>/js/demo/chart-bar-demo.js</code> file.
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-pie pt-4">
                                {/* <ResponsiveContainer width="100%" height="100%">
                                    <PieChart width="100%" height="100%">
                                    <Pie data={data1} dataKey="value"  fill="#36b9cc" />
                                    <Tooltip/>
                                    </PieChart>
                                </ResponsiveContainer> */}
                                    </div>
                                <hr />
                                Styling for the donut chart can be found in the
                                <code>/js/demo/chart-pie-demo.js</code> file.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
