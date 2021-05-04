import { faFile, faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons'
import { faEnvelopeOpenText, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <li>
                <Link to="/" className="active">
                    <FontAwesomeIcon className="nav-icon" icon={faHome}/>
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to="/resume">
                <FontAwesomeIcon className="nav-icon sided" icon={faUser}/>
                    <p>Resume</p>
                </Link>
            </li>
            <li>
                <Link to="/projects">
                <FontAwesomeIcon className="nav-icon sided" icon={faLightbulb}/>
                    <span>Projects</span>
                </Link>
            </li>
            <li>
                <Link to="/blogs">
                <FontAwesomeIcon className="nav-icon" icon={faFile}/>
                    <p>Blog</p>
                </Link>
            </li>
            <li>
                <Link to="/contact">
                <FontAwesomeIcon className="nav-icon sided" icon={faEnvelopeOpenText}/>
                    <p>Contact</p>
                </Link>
            </li>
        </nav>
    )
}

export default Navbar
