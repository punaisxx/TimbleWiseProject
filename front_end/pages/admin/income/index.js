// import { useState, useEffect } from 'react';
// import { fetchTransactionData } from '../api'; // Example function to fetch transaction data

// export default function DashboardPage() {
//     const [dailyIncomeData, setDailyIncomeData] = useState([]);

//     useEffect(() => {
//         // Fetch transaction data when the component mounts
//         fetchTransactionData()
//             .then(transactions => {
//                 // Group transactions by day
//                 const incomeByDay = {};
//                 transactions.forEach(transaction => {
//                     const date = new Date(transaction.timestamp).toLocaleDateString();
//                     incomeByDay[date] = (incomeByDay[date] || 0) + transaction.amount;
//                 });
                
//                 // Convert grouped data into an array of objects
//                 const incomeDataArray = Object.entries(incomeByDay).map(([date, income]) => ({
//                     date,
//                     income
//                 }));
//                 setDailyIncomeData(incomeDataArray);
//             })
//             .catch(error => {
//                 console.error('Error fetching transaction data:', error);
//             });
//     }, []); // Empty dependency array to run effect only once when component mounts

//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <div>
//                 {dailyIncomeData.map((data, index) => (
//                     <div key={index}>
//                         <p>Date: {data.date}</p>
//                         <p>Total Income: ${data.income}</p>
//                     </div>
//                 ))}
//             </div>
//             {/* Other dashboard content */}
//         </div>
//     );
// }