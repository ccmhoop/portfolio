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
        <div className="project-card">
            <div className="project-card-image-container">
                <img className="project-card-image" src={image} alt={title}/>
                <div className="project-card-overlay">
                    <a href={link} className="project-card-view-link">
                        View Project <HiArrowUpRight />
                    </a>
                </div>
            </div>
            <div className="project-content-wrapper">
                <div className="project-header">
                    <div className="project-title-progress-container">
                        <h3>{title}</h3>
                        <span className="project-progress">{progress}</span>
                    </div>
                    <div className="project-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="project-tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

