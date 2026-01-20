import {homeData} from "@/data/homeData.js";
import {TbSchool, TbCircleCheck} from "react-icons/tb";

const mapInterestsToLi = () => {
    return homeData.interestsArray.map((item, index) => {
        return (
            <li key={index} className="interest-item">
                <TbCircleCheck className="interest-icon" />
                <span>{item}</span>
            </li>
        )
    })
}

const mapEducationToLi = () => {
    return homeData.educationObjectArray.map((item, index) => {
        return (
            <li key={index} className="education-item">
                <div className="education-header">
                    <div className="education-icon-wrapper">
                        <TbSchool size={20} aria-hidden="true" />
                    </div>
                    <div className="education-info">
                        <strong className="education-course">{item.course}</strong>
                        <span className="education-school">{item.school}</span>
                    </div>
                </div>
            </li>
        )
    })
}

export {mapInterestsToLi, mapEducationToLi}