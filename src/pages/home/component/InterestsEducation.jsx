import {homeData} from "@/data/homeData.js";
import {mapEducationToLi, mapInterestsToLi} from "@/pages/home/component/MapToElement.jsx";
import {TbBook, TbHeart} from "react-icons/tb";
import {useAppContext} from "@/app/context/AppContext.jsx";


export function Interests({hideTitle = false}) {
    return (
        <section className="interests-container">
            {!hideTitle && (
                <h3 className="section-title">
                    <TbHeart className="section-icon"/>
                    {homeData.interestsTitle}
                </h3>
            )}
            <ul className="interests-list">
                {mapInterestsToLi()}
            </ul>
        </section>
    );
}

export function Education({hideTitle = false}) {
    return (
        <section className="education-container">
            {!hideTitle && (
                <h3 className="section-title">
                    <TbBook className="section-icon"/>
                    {homeData.educationTitle}
                </h3>
            )}
            <ul className="education-list">
                {mapEducationToLi()}
            </ul>
        </section>
    );
}

export default function InterestsEducation({isMobileView = false}) {
    const {isMobile} = useAppContext();
    const hideTitles = isMobileView ? false : isMobile;

    return (
        <div className={`interests-education-wrapper ${isMobileView ? "mobile-combined" : ""}`}>
            <Interests hideTitle={hideTitles}/>
            <Education hideTitle={hideTitles}/>
        </div>
    )
}