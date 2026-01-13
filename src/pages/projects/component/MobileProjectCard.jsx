import testPic from "/public/profilePicTest.jpg"

export default function MobileProjectCard({ isActive, ...props }) {
    return (
        <div 
            className={`mobile-project-card ${isActive ? 'active' : ''}`} 
            {...props}
        >
            <img className="mobile-project-card-image" src={testPic} alt="Project thumbnail"/>
            <div className="mobile-project-content-wrapper">
                <div className="mobile-project-title-progress-container">
                    <h3>Project Title</h3>
                    <span className="mobile-project-progress">100%</span>
                </div>
                <span className="mobile-project-quick-detail">react, java, spring</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button className="project-card-button mobile-button">
                    Go to Project
                </button>
            </div>
        </div>
    )
}
