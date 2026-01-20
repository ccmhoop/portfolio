import {homeData} from "@/data/homeData.js";
import {TbUser} from "react-icons/tb";

export default function AboutMe() {
    return (
        <div className="about-me-content">
            <h2 className="section-title">
                <TbUser className="section-icon"/>
                {homeData.aboutMeTitle}
            </h2>

            <div className="about-me-text-container">
                <p>
                    {homeData.aboutMeDescription}
                </p>
                <a href={`${homeData.cvFile}`} download="CVConnerDeHoop.pdf" className="button"
                   aria-label="Download CV as PDF">
                    <span>Download CV</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         style={{transition: 'transform 0.3s ease'}} aria-hidden="true">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}