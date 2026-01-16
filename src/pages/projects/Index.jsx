import {useEffect, useRef, useState} from "react";
import "./Style.css"
import picTest from "/projectTest.png";
import ProjectCard from "./component/ProjectCard.jsx";
import MobileProjectCard from "./component/MobileProjectCard.jsx";

const PROJECTS_DATA = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart functionality, secure checkout, and real-time inventory management. Built with performance and scalability in mind.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        progress: "Completed",
        image: picTest, // Placeholder
        link: "#" // Placeholder
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio designed to showcase creative work. Features glassmorphism, smooth animations, and optimized for all screen sizes.",
        tags: ["React", "Vite", "CSS3", "Framer Motion"],
        progress: "95%",
        image: picTest,
        link: "#"
    },
    {
        title: "Task Management App",
        description: "Collaborative tool for teams to organize projects and track progress. Includes drag-and-drop boards, task assignments, and deadline notifications.",
        tags: ["Java", "Spring Boot", "PostgreSQL", "React"],
        progress: "Completed",
        image: picTest,
        link: "#"
    },
    {
        title: "AI Chat Assistant",
        description: "Intelligent chatbot powered by large language models to provide instant support and information. Integrates with various APIs for enhanced functionality.",
        tags: ["Python", "OpenAI API", "React", "WebSocket"],
        progress: "80%",
        image: picTest,
        link: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Interactive dashboard providing real-time weather data and forecasts for locations worldwide. Uses advanced visualization for climate trends.",
        tags: ["JavaScript", "OpenWeatherMap API", "Chart.js"],
        progress: "Completed",
        image: picTest,
        link: "#"
    },
    {
        title: "Fitness Tracker",
        description: "Mobile-first application to monitor health metrics, track workouts, and set personalized fitness goals. Includes data visualization and social features.",
        tags: ["React Native", "Firebase", "Redux"],
        progress: "In Progress",
        image: picTest,
        link: "#"
    }
];

const ProjectsPage = () => {
    const scrollContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const [activeIndex, setActiveIndex] = useState(0);
    const isJumping = useRef(false);

    const projectCount = PROJECTS_DATA.length;
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
            const gap = 12; // approximate gap based on CSS 0.75em

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

            // Update active index based on scroll position if it's not jumping
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

    const renderMobileCards = () => {
        const items = [];
        // Add end clones to the beginning
        for (let i = projectCount - clonesCount; i < projectCount; i++) {
            items.push(
                <MobileProjectCard 
                    key={`clone-start-${i}`} 
                    data-index={i} 
                    isActive={activeIndex === i}
                    {...PROJECTS_DATA[i]}
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
                    {...PROJECTS_DATA[i]}
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
                    {...PROJECTS_DATA[i]}
                />
            );
        }
        return items;
    };

    return (
        <section className="projects-page">
            {isMobile && (
                <div className="mobile-projects-filler">
                    <div className="filler-line"></div>
                    <span className="filler-text">
                        {PROJECTS_DATA[activeIndex]?.title || "SELECTED WORKS"}
                    </span>
                    <div className="filler-line"></div>
                </div>
            )}

            <div className="projects-carousel-wrapper">
                <div className="projects-layout-container" ref={scrollContainerRef}>
                    {!isMobile ? (
                        PROJECTS_DATA.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))
                    ) : (
                        renderMobileCards()
                    )}
                </div>
            </div>

            {isMobile && (
                <div className="carousel-dots">
                    {Array.from({ length: projectCount }).map((_, i) => (
                        <button
                            key={i}
                            className={`carousel-dot ${activeIndex === i ? 'active' : ''}`}
                            onClick={() => handleDotClick(i)}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export {ProjectsPage}