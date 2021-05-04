import React from 'react'
import { faCode, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Project({site}) {
    const {title, subtitle, description, code, live, techs, image}= site;
    return (
        <div className="project">
            <div className="project-img">
                <img src={image} alt=""/>
                <div className="project-overlay">
                    <a href={live} target="_blank"><FontAwesomeIcon icon={faGlobe}/> Live</a>
                    <a href={code} target="_blank"><FontAwesomeIcon icon={faCode}/> Github</a>
                </div>
                </div>
            <div className="project-detail">
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
                <p>{description}</p>
                <div className="project-techs">
                    {techs.map(i=> <span>{i}</span>)}
                </div>
            </div>
        </div>
    )
}

export default Project
