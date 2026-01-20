import React, { useState, useEffect, useCallback, useRef, Children } from 'react';
import './Carousel.css';

const Carousel = ({ children, titles = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    
    const items = Children.toArray(children);
    const itemCount = items.length;

    // Minimum swipe distance in pixels
    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % itemCount);
    }, [itemCount]);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
    }, [itemCount]);

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    if (itemCount === 0) return null;

    return (
        <div className="carousel-container">
            {titles.length > 0 && (
                <div className="carousel-title-wrapper" aria-hidden="true">
                    <div className="carousel-title-line"></div>
                    <span className="carousel-title-text">{titles[activeIndex] || "SELECTED WORKS"}</span>
                    <div className="carousel-title-line"></div>
                </div>
            )}
            
            <div 
                className="carousel-track"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {items.map((child, index) => (
                    <div 
                        key={index} 
                        className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
                    >
                        {child}
                    </div>
                ))}
            </div>

            <div className="carousel-dots">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
