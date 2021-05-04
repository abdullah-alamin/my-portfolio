import React from 'react'
import react from '../../images/react.png'
import js from '../../images/js.png'
import bt from '../../images/bt.png'
import redux from '../../images/redux.png'
import mUi from '../../images/m-ui.png'
import express from '../../images/express.png'
import dev from '../../images/dev.png'
import firebase from '../../images/firebase.png'
import git from '../../images/git.png'
import github from '../../images/github.png'
import heroku from '../../images/heroku.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import mongoose from '../../images/mngoose.jpg'
import mongo from '../../images/mongo.png'
import netlify from '../../images/netlify.png'
import node from '../../images/node.png'
import npm from '../../images/npm.png'
import sass from '../../images/sass.png'
import vs from '../../images/vs.png'
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
        },
        {
            name: 'Firebase',
            img: firebase
        },
        {
            name: 'HTML',
            img: html
        },
        {
            name: 'CSS',
            img: css
        },
        {
            name: 'Sass',
            img: sass
        },
    ];
    const backend= [
        {
            name:"Express",
            img: express
        },
        {
            name:"Nodejs",
            img: node
        },
        {
            name:"MongoDB",
            img: mongo
        },
        {
            name:"Mongoose",
            img: mongoose
        },
        {
            name:"Heroku",
            img: heroku
        },
        {
            name:"Netlify",
            img: netlify
        },
    ]
    const tools= [
        {
            name: "Chrome Dev",
            img: dev
        },
        {
            name: "Git",
            img: git
        },
        {
            name: "Github",
            img: github
        },
        {
            name: "VS Code",
            img: vs
        },
        {
            name: "NPM",
            img: npm
        },
    ]
    return (
        <div className="skill-set">
            <h3 className="line-bg">Skill Set</h3>
            <h4><span>Frontend</span></h4>
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
            <h4><span>Backend</span></h4>
            <div className="skills">
                {backend.map(i=> {
                    return(
                    <div>
                        <img src={i.img} alt=""/>
                        <p>{i.name}</p>
                    </div>   
                    )
                })}               
            </div>
            <h4><span>Tools</span></h4>
            <div className="skills">
                {tools.map(i=> {
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
