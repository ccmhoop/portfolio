import reactLogo from "/react.svg";
import profilePicture from "/profilePicTest.jpg"
import javaLogo from "/javaLogo.png";
import springLogo from "/springLogo.png";
import {globalOptions, homeOptions} from "../../options/options.js";
import {mapInterestsToLi, mapEducationToLi} from "./component/MapToElement.jsx"
import "./Style.css"

const HomePage = () => {

    return (
        <section className="home-page">
            <title>
                {globalOptions.fullName}
            </title>
            <div className="about-wrapper">
                <div className="social-profile-wrapper">
                    <div className="profile-picture-container">
                        <img src={profilePicture} alt="Vite logo"/>
                    </div>
                    <h2>
                        {globalOptions.fullName}
                    </h2>

                    <div className="logo-wrapper">
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo"/>
                        </a>
                        <div className="logo-container">
                            <img src={javaLogo} className="logo react" alt="React logo"/>
                        </div>
                        <div className="logo-container">
                            <img src={springLogo} className="logo react" alt="React logo"/>
                        </div>
                    </div>
                    <p>
                        {globalOptions.profession}
                    </p>
                </div>
                <div className="card">
                    <h2>
                        {homeOptions.aboutMeTitle}
                    </h2>
                    <p>
                        {homeOptions.aboutMeDescription}
                    </p>
                    <button className={"button"}>
                        Download CV
                    </button>
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