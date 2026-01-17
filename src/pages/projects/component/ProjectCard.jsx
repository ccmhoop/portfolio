import picTest from "/projectTest.png";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ProjectCard({ 
    title = "Project Title", 
    description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate ducimus eveniet laudantium.",
    tags = ["react", "java", "spring"],
    progress = "100%",
    image = picTest,
    link = "#"
}) {

    return (
        <article className="project-card">
            <div className="project-card-image-container">
                <img className="project-card-image" src={image} alt={`Screenshot of ${title}`}/>
                <div className="project-card-overlay">
                    <a href={link} className="project-card-view-link" target="_blank" rel="noopener noreferrer">
                        View Project <HiArrowUpRight aria-hidden="true" />
                    </a>
                </div>
            </div>
            <div className="project-content-wrapper">
                <header className="project-header">
                    <div className="project-title-progress-container">
                        <h3>{title}</h3>
                        <span className="project-progress" aria-label="Project completion progress">{progress}</span>
                    </div>
                    <div className="project-tags" aria-label="Technologies used">
                        {tags.map((tag, index) => (
                            <span key={index} className="project-tag">{tag}</span>
                        ))}
                    </div>
                </header>
                <p>{description}</p>
            </div>
        </article>
    )
}

