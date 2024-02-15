import React from 'react'
import { Chart } from "react-google-charts";
import Sidebar from './Sidebar';

export const data = [
    ["Company", "Revenues changes"],
    ["FedEx", 10700],
    ["Delhivery", -15400],
    ["Amazon", 12500],
    ["Ekart", -2100],
    ["Dunzo", 22600],
    ["Heki", 1100],
];

export const options = {
    allowHtml: true,
    showRowNumber: true,
};

export const formatters = [
    {
        type: "NumberFormat",
        column: 1,
        options: {
            prefix: "$",
            negativeColor: "red",
            negativeParens: true,
        },
    },
];

function Revenue() {
    return (
        <div className='mt-14 flex flex-row'>
            <Sidebar />
            <div className='w-4/5'>
                <h2 className="text-3xl font-bold ml-6 mt-5">Revenue</h2>
                <div className='flex justify-center w-10/12 mt-8 ml-8'>

                    <Chart
                        chartType="Table"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                        formatters={formatters}
                    />

                </div>
            </div>
        </div>
    )
}

export default Revenue
