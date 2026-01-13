import {useEffect} from "react";
import "./Style.css"
import ProjectCard from "./component/ProjectCard.jsx";

const ProjectsPage = () => {

    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
        <section className="projects-page">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-layout-container">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>

        </section>
    )
}

export {ProjectsPage}