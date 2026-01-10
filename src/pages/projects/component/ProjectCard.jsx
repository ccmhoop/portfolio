import testPic from "/public/profilePicTest.jpg"

export default function ProjectCard() {

    return (
        <div className="project-card">
            <img className="project-card-image" src={testPic} alt=""/>
            <div className="project-title-progress-container">
                <strong>Project Title</strong>
                <span className="project-progress">100%</span>
                <span className="project-quick-detail"> react, java, spring</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate ducimus eveniet laudantium .
            </p>

            <button className="project-card-button">
                Got to Project
            </button>
        </div>
    )
}

