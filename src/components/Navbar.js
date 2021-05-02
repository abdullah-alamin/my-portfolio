import { faFile, faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons'
import { faEnvelopeOpenText, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Navbar() {
    return (
        <nav>
            <li>
                <a href="" className="active">
                    <FontAwesomeIcon className="nav-icon" icon={faHome}/>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="">
                <FontAwesomeIcon className="nav-icon sided" icon={faUser}/>
                    <p>Resume</p>
                </a>
            </li>
            <li>
                <a href="">
                <FontAwesomeIcon className="nav-icon sided" icon={faLightbulb}/>
                    <span>Projects</span>
                </a>
            </li>
            <li>
                <a href="">
                <FontAwesomeIcon className="nav-icon" icon={faFile}/>
                    <p>Blog</p>
                </a>
            </li>
            <li>
                <a href="">
                <FontAwesomeIcon className="nav-icon sided" icon={faEnvelopeOpenText}/>
                    <p>Contact</p>
                </a>
            </li>
        </nav>
    )
}

export default Navbar
