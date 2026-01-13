import {useEffect, useRef, useState} from "react";
import "./Style.css"
import ProjectCard from "./component/ProjectCard.jsx";
import MobileProjectCard from "./component/MobileProjectCard.jsx";

const ProjectsPage = () => {
    const scrollContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const [activeIndex, setActiveIndex] = useState(0);
    const isJumping = useRef(false);

    const projectCount = 9;
    const clonesCount = 3; // Number of clones on each side

    useEffect(() => {
        document.title = "Projects";
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Initial scroll position to the first real item
    useEffect(() => {
        if (isMobile && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstRealItem = container.children[clonesCount];
            if (firstRealItem) {
                container.scrollLeft = firstRealItem.offsetLeft - (container.clientWidth - firstRealItem.clientWidth) / 2;
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
            const gap = 8; // approximate gap based on CSS 0.5em

            // Boundary detection
            // When we reach the end of the clones at the beginning, or the beginning of clones at the end
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
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [isMobile, projectCount, clonesCount]);

    useEffect(() => {
        if (!isMobile || !scrollContainerRef.current) return;

        const observerOptions = {
            root: scrollContainerRef.current,
            threshold: 0.6,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'));
                    setActiveIndex(index);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const children = scrollContainerRef.current.querySelectorAll('.mobile-project-card');
        children.forEach((child) => observer.observe(child));

        return () => observer.disconnect();
    }, [isMobile]);

    const renderMobileCards = () => {
        const items = [];
        // Add end clones to the beginning
        for (let i = projectCount - clonesCount; i < projectCount; i++) {
            items.push(
                <MobileProjectCard 
                    key={`clone-start-${i}`} 
                    data-index={i} 
                    isActive={activeIndex === i}
                />
            );
        }
        // Add real items
        for (let i = 0; i < projectCount; i++) {
            items.push(
                <MobileProjectCard 
                    key={i} 
                    data-index={i} 
                    isActive={activeIndex === i}
                />
            );
        }
        // Add start clones to the end
        for (let i = 0; i < clonesCount; i++) {
            items.push(
                <MobileProjectCard 
                    key={`clone-end-${i}`} 
                    data-index={i} 
                    isActive={activeIndex === i}
                />
            );
        }
        return items;
    };

    return (
        <section className="projects-page">
            <h1 className="projects-title">Projects</h1>
            
            <div className="projects-carousel-wrapper">
                <div className="projects-layout-container" ref={scrollContainerRef}>
                    {!isMobile ? (
                        <>
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </>
                    ) : (
                        renderMobileCards()
                    )}
                </div>
            </div>
        </section>
    )
}

export {ProjectsPage}