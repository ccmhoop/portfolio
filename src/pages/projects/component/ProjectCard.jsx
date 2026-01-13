import testPic from "/public/profilePicTest.jpg"

export default function ProjectCard() {

    return (
        <div className="project-card">
            <img className="project-card-image" src={testPic} alt="Project thumbnail"/>
            <div className="project-content-wrapper">
                <div className="project-title-progress-container">
                    <h3>Project Title</h3>
                    <span className="project-progress">100%</span>
                </div>
                <span className="project-quick-detail">react, java, spring</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate ducimus eveniet laudantium.</p>
                <button className="project-card-button">
                    Go to Project
                </button>
            </div>
        </div>
    )
}

