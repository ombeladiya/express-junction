import React from 'react'
import Sidebar from './Sidebar'
import { Chart } from "react-google-charts";

export const data = [
    [
        "Day",
        "Number of User",
    ],

    [14, 37],
    [13, 30],
    [12, 25],
    [11, 11],
    [10, 11],
    [9, 11],
    [8, 10],
    [7, 10],
    [6, 7],
    [5, 6],
    [4, 4],
    [3, 4],
    [2, 4],
    [1, 2],
];

export const options = {
    chart: {
        title: "Day vs. Number of users",
        subtitle: "in millions",
    },
};

export const data2 = [
    ["Company", "Orders (in millions)"],
    ["Delhivary", 13],
    ["Fedex", 83],
    ["Amazon", 1.4],
    ["ekart", 2.3],
    ["Gillete", 46],
    ["Samsung", 300],
    ["boat", 38],
    ["Kashmiri", 5.5],
    ["Konkani", 5],
    ["Maithili", 20],
    ["huil", 33],
    ["Manipuri", 1.5],
    ["lenskart", 72],
    ["Nepali", 2.9],
    ["Oriya", 33],
    ["byzu", 29],
    ["Sanskrit", 0.01],
    ["Santhali", 6.5],
    ["Sindhi", 2.5],
    ["Aakash", 61],
    ["Zoho", 74],
    ["setpi", 52],
  ];
  
  export const options2 = {
    title: "Company Wise Orders",
    legend: "none",
    pieSliceText: "label",
    slices: {
      4: { offset: 0.2 },
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },
    },
  };

function Dashboard() {
    return (
        <div className='mt-14 flex flex-row'>
            <Sidebar />
            <div className='w-4/5'>
                <h2 className="text-3xl font-bold ml-6 mt-5">Dashboard</h2>
                <div className='flex justify-center w-10/12 mt-8 ml-8'>
                    <Chart
                        chartType="Line"
                        width="100%"
                        height="300px"
                        data={data}
                        options={options}
                    />

                   
                </div>
                <div className='flex justify-center w-10/12 mt-8 ml-8'>  
                <Chart
                        chartType="PieChart"
                        data={data2}
                        options={options2}
                        width={"100%"}
                        height={"400px"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
