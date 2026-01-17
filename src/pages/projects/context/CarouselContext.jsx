import { createContext, useContext, useState, useRef, useEffect } from 'react';
import { useAppContext } from '../../../app/context/AppContext.jsx';

const CarouselContext = createContext();

export const CarouselProvider = ({ children, projectsData }) => {
    const { isMobile } = useAppContext();
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isJumping = useRef(false);

    const projectCount = projectsData.length;
    const clonesCount = 3;

    useEffect(() => {
        if (isMobile && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstRealItem = container.children[clonesCount];
            if (firstRealItem) {
                container.scrollLeft = firstRealItem.offsetLeft - (container.clientWidth - firstRealItem.clientWidth) / 2;
                setActiveIndex(0);
            }
        }
    }, [isMobile]);

    useEffect(() => {
        if (!isMobile || !scrollContainerRef.current) return;

        const container = scrollContainerRef.current;

        const handleScroll = () => {
            if (isJumping.current) return;

            const { scrollLeft, scrollWidth, clientWidth } = container;
            const itemWidth = container.children[0]?.clientWidth || 0;

            const firstRealItemOffset = container.children[clonesCount].offsetLeft - (clientWidth - itemWidth) / 2;
            const lastRealItemOffset = container.children[clonesCount + projectCount - 1].offsetLeft - (clientWidth - itemWidth) / 2;

            if (scrollLeft <= 2) {
                isJumping.current = true;
                container.style.scrollSnapType = 'none';
                container.scrollLeft = lastRealItemOffset;
                setTimeout(() => {
                    container.style.scrollSnapType = 'x mandatory';
                    isJumping.current = false;
                }, 50);
            } else if (scrollLeft >= scrollWidth - clientWidth - 2) {
                isJumping.current = true;
                container.style.scrollSnapType = 'none';
                container.scrollLeft = firstRealItemOffset;
                setTimeout(() => {
                    container.style.scrollSnapType = 'x mandatory';
                    isJumping.current = false;
                }, 50);
            }

            if (!isJumping.current) {
                const center = scrollLeft + clientWidth / 2;
                let closestIndex = 0;
                let minDistance = Infinity;

                for (let i = 0; i < container.children.length; i++) {
                    const child = container.children[i];
                    const childCenter = child.offsetLeft + child.clientWidth / 2;
                    const distance = Math.abs(center - childCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        const dataIndex = child.getAttribute('data-index');
                        if (dataIndex !== null) {
                            closestIndex = parseInt(dataIndex);
                        }
                    }
                }
                setActiveIndex(closestIndex);
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [isMobile, projectCount, clonesCount]);

    const handleDotClick = (index) => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const targetItem = container.children[clonesCount + index];
        if (targetItem) {
            container.scrollTo({
                left: targetItem.offsetLeft - (container.clientWidth - targetItem.clientWidth) / 2,
                behavior: 'smooth'
            });
        }
    };

    return (
        <CarouselContext.Provider value={{
            activeIndex,
            scrollContainerRef,
            handleDotClick,
            projectCount,
            clonesCount,
            projectsData
        }}>
            {children}
        </CarouselContext.Provider>
    );
};

export const useCarouselContext = () => {
    const context = useContext(CarouselContext);
    if (!context) {
        throw new Error('useCarouselContext must be used within a CarouselProvider');
    }
    return context;
};
