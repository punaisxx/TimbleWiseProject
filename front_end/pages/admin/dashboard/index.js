import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
        const [productData, setProductData] = useState(null);

        useEffect(() => {
                const fetchData = async () => {
                  try {
                        const response = await fetch('http://localhost:3002/api/getAllProduct');
                        const data = await response.json();
                        const updatedData = await Promise.all(data.map(async (product) => {
                          let positive = 0; // Initialize positive sentiment count
                          // Iterate over each comment of the product
                          for (const comment of product.comment) {
                            // Perform sentiment analysis on the comment
                            const sentimentResponse = await fetch('https://api.aiforthai.in.th/ssense', {
                              method: 'POST',
                              headers: {
                                'Apikey': 'PDAdWDdkS8hGqXL5KLByq0ggGyrCICfF',
                                'Content-Type': 'application/x-www-form-urlencoded'
                              },
                              body: new URLSearchParams({
                                text: comment.comment_string // Assuming comment_string is the text you want to analyze
                              })
                            });
                            const sentimentData = await sentimentResponse.json();
                            // Update positive sentiment count based on sentiment analysis result
                            if (sentimentData.sentiment.polarity === 'positive') {
                              positive++;
                            }
                          }
                          // Return the product with updated comment_status
                          return {
                            ...product,
                            comment_status: {
                              positive: positive,
                              positive_rate: positive/product.comment.length*100 // Assuming comment is an array of comments
                            }
                          };
                        }));
                    setProductData(updatedData);
                  } catch (error) {
                    console.error('Error fetching product data:', error);
                  }
                };
            
                fetchData();
              }, []);
              
              
              console.log(productData);

        return (
                <div>
                        <div style={{ marginTop: '0em' }}></div>
                        <div className='right-side'>
                                <div className='dashboard-topic'>Positive Comment Rate For Product</div>
                                <div className="py-4 ml-[-300px]">
                                    <div className="w-full flex flex-col lg:flex-row border border-[#103E13] gap-10 rounded-xl p-6 pb-16">
                                      <div className='order-summary-container flex'>
                                              {productData ? (
                                              productData.map(product => (
                                              <div key={product.id} className='order-item ml-2'>             
                                                      <img src={product.image} alt={product.name} className='product-image' />
                                                      <div className='order-item'>Product name: {product.name}</div>
                                                      <div className='order-item'>Price: ${product.price}</div>
                                                      <div className='order-item'>Positive: {product.comment_status.positive}</div>
                                                      <div className='order-item'>Positive Rate: {parseFloat(product.comment_status.positive_rate).toFixed(2)} %</div>
                                              </div>
                                              ))
                                              ) : (
                                              <div>Loading...</div>
                                              )}
                                      </div>                          
                                    </div>
                                </div>
                        </div>
                </div>
                
        );
};

export default Dashboard;

