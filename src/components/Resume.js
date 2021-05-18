import React from 'react'

function Resume() {
    return (
        <div className='resume-wrap'>
            <div className="resume-edu resume-item">
                <h3 className="line-bg">Education</h3>
                <div className="resume-block">
                    <div className="resume-title">
                        <p className="style-box">w</p>
                        <h4>Bachelor of Social Science</h4>
                    </div>
                    <div className="resume-date">
                        <p>Expected ending: 2023</p>
                        <p>Grade: continuing</p>
                    </div>
                    <p className="resume-text">
                        At <i><strong>University of Dhaka</strong></i>, the leading university of Bangladesh, I am taking a BSS degree that majors in <i><strong>ECONOMICS</strong></i>. We also have seperate specialized <i><strong>Computer Science</strong></i> courses, which are designed for <i>Programming</i> and <i>Data Science</i>.
                    </p>
                </div>
                <div className="resume-block">
                    <div className="resume-title">
                        <p className="style-box">w</p>
                        <h4>Complete Web Development</h4>
                    </div>
                    <div className="resume-date">
                        <p>Passing Year: 2021</p>
                        <p>Grade: In top 1%</p>
                    </div>
                    <p className="resume-text">
                        <i><strong>Programming Hero</strong></i>, a renowned programming institute of Bangladesh, offers a six month long web programming couse which basically includes <strong>Javascript, React, Nodejs and MongoDB.</strong> We also had a deep dive into <strong>Firebase, Data Structure - Algorithm</strong> and <strong>Object Oriented Programming</strong>
                    </p>
                </div>
                <div className="resume-block">
                    <div className="resume-title">
                        <p className="style-box">w</p>
                        <h4>Web Programming Bootcamp</h4>
                    </div>
                    <div className="resume-date">
                        <p>Passing Year: 2020</p>
                        <p>Grade: Passed</p>
                    </div>
                    <p className="resume-text">
                        It's really a matter of rejoice for me to attend the great web programming bootcamp by <i><strong>Colt Stele</strong></i>. His comprehensive teaching method gives me the motivation to code.
                    </p>
                </div>
            </div>
            <div className="resume-exp resume-item"></div>
            
        </div>
    )
}

export default Resume
