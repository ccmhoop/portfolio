import {homeOptions} from '@/data/pageData.js'
import {TbSchool} from "react-icons/tb";

const mapInterestsToLi = () => {
    return homeOptions.interestsArray.map((item, index) => {
        return <li key={index}>{item}</li>
    })
}

const mapEducationToLi = () => {
    return homeOptions.educationObjectArray.map((item, index) => {
        return (
            <li key={index}>
                <div className="education-header">
                    <TbSchool size={20} aria-hidden="true" />
                    <strong>{item.course}</strong>
                </div>
                <span className="education-school">{item.school}</span>
            </li>
        )
    })
}

export {mapInterestsToLi, mapEducationToLi}