import {globalAppData} from "@/data/pageData.js";
import {homeData} from "@/data/homeData.js";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

const SocialProfile = () => {
    return (
        <aside className="social-profile-wrapper">
            <div className="profile-picture-container">
                <img src={`${homeData.profilePicture}`} alt={`${globalAppData.fullName} profile picture`} />
            </div>
            <div className="profile-info">
                <h1>
                    {globalAppData.fullName}
                </h1>
                <p className="profession">
                    {globalAppData.profession}
                </p>
            </div>

            <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <FaLinkedin />
                </a>
                <a href="mailto:contact@example.com" aria-label="Email Me">
                    <FaEnvelope />
                </a>
            </div>

            <div className="tech-stack-wrapper">
                <div className="logo-wrapper">
                    <div className="logo-container">
                        <img src={`${homeData.icons.reactIcon}`} className="logo" alt="React logo"/>
                    </div>
                    <div className="logo-container">
                        <img src={`${homeData.icons.javaIcon}`} className="logo" alt="Java logo"/>
                    </div>
                    <div className="logo-container">
                        <img src={`${homeData.icons.springIcon}`} className="logo" alt="Spring logo"/>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export {SocialProfile};
