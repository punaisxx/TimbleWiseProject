const salesData = [
        {"date": "2024-04-10", "sales": 1500},
        {"date": "2024-04-11", "sales": 1800},
        {"date": "2024-04-12", "sales": 2200},
        {"date": "2024-04-13", "sales": 2100},
        {"date": "2024-04-14", "sales": 1900},
        {"date": "2024-04-15", "sales": 2500},
        {"date": "2024-04-16", "sales": 2700},
        {"date": "2024-04-17", "sales": 2300},
        {"date": "2024-04-18", "sales": 2100},
        {"date": "2024-04-19", "sales": 2000},
        {"date": "2024-04-20", "sales": 2400},
        {"date": "2024-04-21", "sales": 2600},
        {"date": "2024-04-22", "sales": 2800},
        {"date": "2024-04-23", "sales": 2900},
        {"date": "2024-04-24", "sales": 3190},
        {"date": "2024-04-25", "sales": 2700},
        {"date": "2024-04-26", "sales": 3200},
        {"date": "2024-04-27", "sales": 3400}
]
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