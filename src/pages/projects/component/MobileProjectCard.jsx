import picTest from "@/assets/images/projectTest.png";
import {HiArrowUpRight} from "react-icons/hi2";

export default function MobileProjectCard({
                                              title = "Project Title",
                                              description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                                              tags = ["react", "java", "spring"],
                                              progress = "100%",
                                              image = picTest,
                                              link = "#",
                                              ...props
                                          }) {
    return (
        <div className="mobile-project-card-wrapper">
            <div className="mobile-project-image-container">
                    <img className="mobile-project-card-image" src={`${image}`} alt={`Screenshot of ${title}`}/>
                    <span className="mobile-project-progress-badge"
                          aria-label="Project completion progress">{progress}</span>
                </div>
                <div className="mobile-project-content-wrapper">
                    <div className="mobile-project-header">
                        <h3 className="mobile-project-title">{title}</h3>
                        <div className="mobile-project-tags" aria-label="Technologies used">
                            {tags.slice(0, 3).map((tag, index) => (
                                <span key={index} className="mobile-project-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <p className="mobile-project-description">{description}</p>
                    <a href={link} className="mobile-button" target="_blank"
                       rel="noopener noreferrer">
                        View Project <HiArrowUpRight aria-hidden="true"/>
                    </a>
                </div>
            </div>
        )
    }
