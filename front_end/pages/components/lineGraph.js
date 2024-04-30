import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = ({ salesData }) => {
        const latestSevenDaysSales = salesData.slice(-7);
        const labels = latestSevenDaysSales.map(day => day.date);
        const data = latestSevenDaysSales.map(day => day.sales);

        const dataset = {
                labels: labels,
                datasets: [
                        {
                                label: 'Total Sales',
                                data: data,
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1
                        }
                ]
        };
        return (
                <div>
                        <h2>Sales in the Last 7 Days</h2>
                        <Line data={dataset} />
                </div>
        );
}

export default LineGraph;