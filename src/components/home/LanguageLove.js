import { faBookOpen, faBusAlt, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function LanguageLove() {
    return (
        <div className="lang-love">
            <div className="love">
                <h3 className="line-bg">Passion</h3>
                <div>
                    <p className="style-box"><FontAwesomeIcon icon={faBookOpen}/></p>
                    <p>Books</p>
                </div>
                <div>
                    <p className="style-box">
                        <FontAwesomeIcon icon={faTrophy}/>
                    </p>
                    <p>Badminton</p>
                </div>
                <div>
                    <p className="style-box">
                        <FontAwesomeIcon icon={faBusAlt}/>
                    </p>
                    <p>Travelling</p>
                </div>
            </div>
            <div className="lang">
                <h3 className="line-bg">Languages</h3>
                <div className="prof">
                    <h4>English</h4>
                    <div className="bubbles english">
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <h4>8/10</h4>
                </div>
                <div className="prof">
                    <h4>Bengali</h4>
                    <div className="bubbles bengali">
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <h4>10/10</h4>
                </div>
                <div className="prof">
                    <h4>Arabic</h4>
                    <div className="bubbles arabic">
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <h4>7/10</h4>
                </div>
                <div className="prof">
                    <h4>Hindi</h4>
                    <div className="bubbles hindi">
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <h4>4/10</h4>
                </div>
            </div>
        </div>
    )
}

export default LanguageLove
