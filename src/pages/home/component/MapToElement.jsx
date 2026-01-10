import {homeOptions} from '../../../options/options.js'

const mapInterestsToLi = () => {
    return homeOptions.interestsArray.map((item, index) => {
        return <li key={index}>{item}</li>
    })
}

const mapEducationToLi = () => {
    return homeOptions.educationObjectArray.map((item, index) => {
        return (
            <li key={index}>
                {item.course}
                <br/>
                <span>
                    {item.school}
                </span>
            </li>
        )
    })
}

export {mapInterestsToLi, mapEducationToLi}