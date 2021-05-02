import React from 'react'
import react from '../../images/react.png'
import js from '../../images/js.png'
import bt from '../../images/bt.png'
import redux from '../../images/redux.png'
import mUi from '../../images/m-ui.png'
function SkillSet() {
    const frontend= [
        {
            name: "React",
            img: react
        },
        {
            name: "Javascript",
            img: js
        },
        {
            name: "Bootstrap",
            img: bt
        },
        {
            name: "Redux",
            img: redux
        },
        {
            name: 'Material UI',
            img: mUi
        }
    ]
    return (
        <div className="skill-set">
            <h3 className="line-bg">Skill Set</h3>
            <div className="skills">
                {frontend.map(i=> {
                    return(
                    <div>
                        <img src={i.img} alt=""/>
                        <p>{i.name}</p>
                    </div>   
                    )
                })}
                
            </div>
        </div>
    )
}

export default SkillSet
