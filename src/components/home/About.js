import { faEnvelope, faMap, faUser } from '@fortawesome/free-regular-svg-icons'
import {  faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function About() {
    return (
        <div className="about">
            <h3 className="line-bg">About Info</h3>
            <div className="about-inner">
                <div className="about-box">
                    <p className="style-box">
                        <FontAwesomeIcon icon={faUser}/>
                    </p>
                    <div>
                        <p>Name</p>
                        <h4>Abdullah Al-amin</h4>
                    </div>
                </div>
                <div className="about-box">
                    <p className="style-box">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </p>
                    <div>
                        <p>Email</p>
                        <h4>abdullah.prohor@gmail.com</h4>
                    </div>
                </div>
                <div className="about-box">
                    <p className="style-box">
                        <FontAwesomeIcon icon={faMap}/>
                    </p>
                    <div>
                        <p>Address</p>
                        <h4>Matual, Jatrabari <br/>Dhaka, Bangladesh</h4>
                    </div>
                </div>
                <div className="about-box">
                    <p className="style-box">
                        <FontAwesomeIcon icon={faPhone}/>
                    </p>
                    <div>
                        <p>Phone</p>
                        <h4>+8801949320280</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
