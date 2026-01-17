import {useEffect} from "react";
import cvFile from "@/assets/docs/CVConnerDeHoop.pdf";
import {globalOptions, homeOptions} from "@/data/pageData.js";
import {mapInterestsToLi, mapEducationToLi} from "./component/MapToElement.jsx";
import "./Style.css";

const HomePage = () => {


    useEffect(() => {
        document.title = globalOptions.name;
    }, []);

    return (
        <section className="home-page">
            <div className="about-wrapper">
                <div className="social-profile-wrapper">
                    <div className="profile-picture-container">
                        <img src={homeOptions.profilePicture} alt={`${globalOptions.fullName} profile picture`}/>
                    </div>
                    <h1>
                        {globalOptions.fullName}
                    </h1>

                    <div className="logo-wrapper">
                        <a href="https://react.dev" target="_blank" rel="noreferrer">
                            <img src={homeOptions.icons.reactIcon} className="logo" alt="React logo"/>
                        </a>
                        <div className="logo-container">
                            <img src={homeOptions.icons.javaIcon} className="logo" alt="Java logo"/>
                        </div>
                        <div className="logo-container">
                            <img src={homeOptions.icons.springIcon} className="logo" alt="Spring logo"/>
                        </div>
                    </div>
                    <p>
                        {globalOptions.profession}
                    </p>
                </div>
                <div className="card">
                    <div className="about-me-content">
                        <h2>
                            {homeOptions.aboutMeTitle}
                        </h2>
                        <p>
                            {homeOptions.aboutMeDescription}
                        </p>
                        <a href={cvFile} download="CVConnerDeHoop.pdf" className="button">
                            <span>Download CV</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s ease' }}>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                        </a>
                    </div>
                    <div className="interests-education-wrapper">
                        <div className="interests-container">
                            <h3>
                                {homeOptions.interestsTitle}
                            </h3>
                            <ul>
                                {mapInterestsToLi()}
                            </ul>
                        </div>
                        <div className="education-container">
                            <h3>
                                {homeOptions.educationTitle}
                            </h3>
                            <ul>
                                {mapEducationToLi()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export {HomePage}