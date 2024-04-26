import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
//   const [visitorCount, setVisitorCount] = useState(0);

//   useEffect(() => {
//     fetch('/visitor-count')
//       .then(res => res.json())
//       .then(data => setVisitorCount(data.count))
//       .catch(err => console.error('Error fetching visitor count:', err));
//   }, []);
        return (
                <div>
                        <div className='sidebar'>
                                <h1>TimbleWise</h1>
                                <a href="#home"><FontAwesomeIcon className="icon" icon={ faHome }/> Home</a>
                                <a href="#services"><FontAwesomeIcon className="icon" icon={ faSquarePollVertical }/> Business Overview</a>
                                <a href="#clients"><FontAwesomeIcon className="icon" icon={ faEye }/> Visitor Statistics</a>
                                <a href="#contact"><FontAwesomeIcon className="icon" icon={ faUser }/> User Manage</a>
                        </div>
                        <div style={{ marginTop: '0em' }}></div>
                        <div className='right-side'>
                                <div className='dashboard-topic'>Business Overview</div>
                                <div className='info-container'>
                                        <div className='total-income'>
                                                <div>Total Income</div>
                                        </div>
                                        <div className='comparison'></div>
                                        <div className='graph'></div>
                                </div>
                        </div>
                </div>
                
        );
};

export default Dashboard;