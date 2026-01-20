import { useEffect, useMemo } from "react";
import "./Style.css";

import { projectCardData } from "@/data/projectData.js";
import ProjectCard from "./component/ProjectCard.jsx";
import MobileProjectCard from "./component/MobileProjectCard.jsx";

import { useAppContext } from "@/app/context/AppContext.jsx";
import Carousel from "@/app/component/carousel/Carousel.jsx";

const ProjectsContent = () => {
    const { isMobile } = useAppContext();

    useEffect(() => {
        document.title = "Projects";
    }, []);

    const mobileCarouselItems = useMemo(
        () =>
            projectCardData.map((project, index) => (
                <MobileProjectCard
                    key={project.id ?? index}
                    {...project}
                />
            )),
        []
    );

    const mobileCarouselTitles = useMemo(
        () => projectCardData.map((project) => project.title),
        []
    );

    if (isMobile) {
        return (
            <section className="projects-page mobile-page-container">
                <Carousel titles={mobileCarouselTitles}>
                    {mobileCarouselItems}
                </Carousel>
            </section>
        );
    }

    return (
        <section className="projects-page">
            <div className="projects-layout-container">
                {projectCardData.map((project, index) => (
                    <ProjectCard
                        key={project.id ?? index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
};

const ProjectsPage = () => {
    return <ProjectsContent />;
};

export { ProjectsPage };
