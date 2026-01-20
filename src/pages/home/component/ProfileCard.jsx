import {globalAppData} from "@/data/pageData.js";
import {homeData} from "@/data/homeData.js";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

export default function ProfileCard() {
    return (
        <div className="profile-card-container">
            <div className="profile-card-header">
                <div className="profile-card-image-wrapper">
                    <img src={`${homeData.profilePicture}`} alt={`${globalAppData.fullName}`} />
                </div>
                <div className="profile-card-info">
                    <h2 className="profile-card-name">{globalAppData.fullName}</h2>
                    <p className="profile-card-profession">{globalAppData.profession}</p>
                </div>
            </div>
            
            <div className="profile-card-content">
                <div className="profile-card-socials">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:contact@example.com" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
                
                <div className="profile-card-tech-stack">
                    <span className="tech-stack-label">Tech Stack</span>
                    <div className="profile-card-logos">
                        <img src={`${homeData.icons.reactIcon}`} alt="React" />
                        <img src={`${homeData.icons.javaIcon}`} alt="Java" />
                        <img src={`${homeData.icons.springIcon}`} alt="Spring" />
                    </div>
                </div>
            </div>
        </div>
    );
}
