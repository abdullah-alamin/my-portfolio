import React from 'react'
import Project from './Project'
import blackboard from '../images/site-ss/blackboard.png'
import letsgo from '../images/site-ss/letsgo.png'
import tataShoe from '../images/site-ss/tata-shoe.PNG'
import cookingMaster from '../images/site-ss/cooking-master.PNG'
const data= [
    {
        title: "BlackBoard",
        subtitle: 'An educational site',
        description: 'As a student, you can enroll in any course, visit your profile and find all the courses with their status. As an admin, you can see all enrollment applications, update their status, create and manage the courses as well as add new admin.',
        techs: ['React', 'Nodejs', 'Express', 'MongoDB', 'Stripe', 'React Router', "Firebase"],
        image: blackboard,
        live: 'https://blackboard.netlify.app',
        code: 'https://github.com/abdullah-alamin/blackboard-client'
    },
    {
        title: "Let's Go",
        subtitle: "Transportation Booking",
        description: "A user can choose one of three transport systems and being logged in find his searched place on google map.",
        techs: ["React", "Firebase", "Google Maps", "React Router"],
        image: letsgo,
        live: 'https://let-s-go-82cf0.web.app/',
        code: 'https://github.com/abdullah-alamin/let-s-go'
    },
    {
        title: "Tata Shoes",
        subtitle: "A simple e-commerce site",
        description: "We just tried to make it a simple e-commerce landing page for shoe selling. With eye-catching desing, it just need the dynamics now!",
        techs: ["HTML", "CSS", "Bootstrap",],
        image: tataShoe,
        live: 'https://abdullah-alamin.github.io/responsive-e-commerce/',
        code: 'https://github.com/abdullah-alamin/responsive-e-commerce'
    },
    {
        title: "Cooking Master",
        subtitle: "Site displaying food items",
        description: "We used api to collect items. You can search for you favourite cuisine. Clicking any type, it shows all the ingredients as well",
        techs: ["HTML", "CSS", "Javascript","Bootstrap",],
        image: cookingMaster,
        live: 'https://abdullah-alamin.github.io/cooking-master/',
        code: 'https://github.com/abdullah-alamin/cooking-master'
    },
]
function Projects() {
    return (
        <div className="projects-container">
            <h3 className="line-bg">Latest Works</h3>
            <div className="projects">
                {data.map(item=> <Project site={item}/>)}
            </div>
        </div>
    )
}

export default Projects
