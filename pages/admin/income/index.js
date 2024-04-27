import salesData from "../income/sales_data"
import { useState, useEffect } from 'react';
import LineGraph from '../components/lineGraph';

export default function Income() {
        const [totalSalesLatestSevenDays, setTotalSalesLatestSevenDays] = useState(0);
        useEffect(() => {
                const currentDate = new Date();
                const sevenDaysAgo = new Date(currentDate);
                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

                const totalSales = salesData.reduce((total, day) => {
                        const salesDate = new Date(day.date);
                        if (salesDate >= sevenDaysAgo && salesDate <= currentDate) {
                                return total + day.sales;
                        }
                        return total;
                      }, 0);
                  
                      setTotalSalesLatestSevenDays(totalSales);
        }, []);

        useEffect(() => {
                // Create and update the chart when component mounts or total sales change
                const ctx = document.getElementById('myChart').getContext('2d');
            
                const latestSevenDaysSales = salesData.slice(-7);
                const labels = latestSevenDaysSales.map(day => day.date);
                const data = latestSevenDaysSales.map(day => day.sales);
            
                const myChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                                labels: labels,
                                datasets: [{
                                        label: 'Total Sales',
                                        data: data,
                                        borderColor: 'rgb(75, 192, 192)',
                                        tension: 0.1
                                }]
                        },
                });
            
                return () => {
                        // Cleanup when component unmounts
                        myChart.destroy();
                };
        }, [totalSalesLatestSevenDays]);
        
        return (
                <div className="income-container">
                        <div className="total-sales">
                                <p>Total Sales for the Latest 7 Days:</p>
                                <h1>{totalSalesLatestSevenDays}</h1>
                        </div>
                        <div className="graph">
                                <canvas id="myChart" style={{ width: '100%', maxWidth: '600px' }}></canvas>
                        </div>
                </div>
        );
};
