import {useEffect} from "react";
import "./Style.css"
import {projectCardData} from "@/data/pageData.js";
import ProjectCard from "./component/ProjectCard.jsx";
import {useAppContext} from "@/app/context/AppContext.jsx";
import {CarouselProvider, useCarouselContext} from "./context/CarouselContext.jsx";
import MobileProjectsCarousel from "./component/MobileProjectsCarousel.jsx";

const ProjectsContent = () => {
    const {isMobile} = useAppContext();
    const { 
        activeIndex, 
        scrollContainerRef, 
        handleDotClick, 
        projectCount 
    } = useCarouselContext();

    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
        <section className="projects-page">
            {isMobile && (
                <div className="mobile-projects-filler">
                    <div className="filler-line"></div>
                    <span className="filler-text">
                        {projectCardData[activeIndex]?.title || "SELECTED WORKS"}
                    </span>
                    <div className="filler-line"></div>
                </div>
            )}

            <div className="projects-carousel-wrapper">
                <div className="projects-layout-container" ref={scrollContainerRef}>
                    {!isMobile ? (
                        projectCardData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))
                    ) : (
                        <MobileProjectsCarousel />
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

const ProjectsPage = () => {
    return (
        <CarouselProvider projectsData={projectCardData}>
            <ProjectsContent />
        </CarouselProvider>
    );
}

export {ProjectsPage}