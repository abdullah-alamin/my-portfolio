import { faFacebookF, faGithub, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profile from '../images/profile fb.jpg'
function HomeBio() {
    return (
        <>
            <div className="home-bio-head">
                <div className="bio-head-craft">
                    <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                        <polygon opacity="0.65" points="0 20, 100 20, 0 100"></polygon>
                    </svg>
                    <svg className="svg-second" preserveAspectRatio="none" viewBox="0 0 100 120">
                        <polygon opacity="0.8" points="0 20, 100 20, 15 120"></polygon>
                    </svg>
                </div>
                <div className="bio-head-info">
                    <h3>Abdullah Al-amin</h3>
                    <span>MERN stack developer</span>
                </div>
                <div className="bio-img">
                    <img src={profile} alt=""/>
                </div>
                <div className="bio-links">
                    <a href="" className="style-box fb-bg">
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                    <a href="" className="style-box git-bg">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href="" className="style-box in-bg">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>
                    <a href="" className="style-box twit-bg">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </div>
            </div>
            <div className="efficiency">
                <div className="effi-box">
                    <h3>90 .</h3>
                    <div style={{width: '80%'}}>
                        <h5>Frontend Development</h5>
                        <div className="effi-bar bar-1"></div>
                    </div>
                </div>
                <div className="effi-box">
                    <h3>90 .</h3>
                    <div style={{width: '80%'}}>
                        <h5>Backend Development</h5>
                        <div className="effi-bar bar-2"></div>
                    </div>
                </div>
            </div>
            <div className="resu-down">
                <a href="">Download Resume</a>
            </div>
        </>
    )
}

export default HomeBio
