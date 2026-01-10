import "./Style.css"
import ProjectCard from "./component/ProjectCard.jsx";

const ProjectsPage = () => {
    return (
        <section className="projects-page">
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