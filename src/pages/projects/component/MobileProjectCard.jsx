import testPic from "/public/profilePicTest.jpg"

export default function MobileProjectCard({ 
    isActive, 
    title = "Project Title",
    description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tags = ["react", "java", "spring"],
    progress = "100%",
    image = testPic,
    ...props 
}) {
    return (
        <div 
            className={`mobile-project-card ${isActive ? 'active' : ''}`} 
            {...props}
        >
            <img className="mobile-project-card-image" src={image} alt={title}/>
            <div className="mobile-project-content-wrapper">
                <div className="mobile-project-title-progress-container">
                    <h3>{title}</h3>
                    <span className="mobile-project-progress">{progress}</span>
                </div>
                <div className="mobile-project-tags">
                    {tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="mobile-project-tag">{tag}</span>
                    ))}
                </div>
                <p>{description}</p>
                <button className="project-card-button mobile-button">
                    View Project
                </button>
            </div>
        </div>
    )
}
