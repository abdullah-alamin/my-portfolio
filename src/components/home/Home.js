import React from 'react'
import About from './About'
import ShortBio from './ShortBio'
import SkillSet from './SkillSet'

function Home() {
    return (
        <div className="site-main">
            <About></About>
            <ShortBio></ShortBio>
            <SkillSet></SkillSet>
        </div>
    )
}

export default Home
