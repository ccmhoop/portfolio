import testPic from "/public/profilePicTest.jpg"
import { HiArrowUpRight } from "react-icons/hi2";

export default function MobileProjectCard({ 
    isActive, 
    title = "Project Title",
    description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tags = ["react", "java", "spring"],
    progress = "100%",
    image = testPic,
    link = "#",
    ...props 
}) {
    return (
        <div 
            className={`mobile-project-card ${isActive ? 'active' : ''}`} 
            {...props}
        >
            <div className="mobile-project-image-container">
                <img className="mobile-project-card-image" src={image} alt={title}/>
                <span className="mobile-project-progress-badge">{progress}</span>
            </div>
            <div className="mobile-project-content-wrapper">
                <div className="mobile-project-tags">
                    {tags.slice(0, 4).map((tag, index) => (
                        <span key={index} className="mobile-project-tag">{tag}</span>
                    ))}
                </div>
                <p className="mobile-project-description">{description}</p>
                <a href={link} className="project-card-button mobile-button">
                    View Project <HiArrowUpRight />
                </a>
            </div>
        </div>
    )
}
