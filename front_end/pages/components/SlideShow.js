import React, { useState, useEffect } from 'react';

export default function SlideShow() {

        const [slideIndex, setSlideIndex] = useState(0);
        
        useEffect(() => {
                const interval = setInterval(() => {
                        setSlideIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming you have 3 slides
                }, 3000); // Change slide every 2 seconds
                
                return () => clearInterval(interval);
        }, []);

        const plusSlides = (step) => {
                const newIndex = (slideIndex + step + 3) % 3; // Ensure the index wraps around
                setSlideIndex(newIndex);
        };

        const currentSlide = (index) => {
                setSlideIndex(index - 1); // Convert to 0-based index
        };

        return (
                <main>
                        <div className="slideshow-container">
                                <div className="mySlides fade" style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
                                        <img src='https://www.w3schools.com/howto/img_nature_wide.jpg' style={{ width: '100%' }} />
                                        <div className="text">Caption Text</div>
                                </div>
                                <div className="mySlides fade" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
                                        <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' style={{ width: '100%' }} />
                                        <div className="text">Caption Text</div>
                                </div>
                                <div className="mySlides fade" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
                                        <img src='https://www.w3schools.com/howto/img_mountains_wide.jpg' style={{ width: '100%' }} />
                                        <div className="text">Caption Text</div>
                                </div>

                                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

                                <div style={{ textAlign: 'center' }}>
                                        <span className="dot" onClick={() => currentSlide(1)}></span> 
                                        <span className="dot" onClick={() => currentSlide(2)}></span> 
                                        <span className="dot" onClick={() => currentSlide(3)}></span>
                                </div>
                        </div>
                </main>
                
        );
};