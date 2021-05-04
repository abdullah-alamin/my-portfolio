import React from 'react'
import About from './About'
import LanguageLove from './LanguageLove'
import ShortBio from './ShortBio'
import SkillSet from './SkillSet'
import Slide from './Slide'

function Home() {
    return (
        <div className="site-main">
            <About></About>
            <ShortBio></ShortBio>
            <SkillSet></SkillSet>
            <LanguageLove></LanguageLove>
            {/* <Slide></Slide> */}
        </div>
    )
}

export default Home
