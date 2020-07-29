import React from 'react';

import SkillsCollection from '../../components/skills-collection/skills-collection.component';


const Skills = () =>(
    <div>
        <div className='about-heading'>Skills</div>
        <span className='about-text'> I started learning web development from a course which taught it from scratch, HTML elements, css classes and IDs,
        javaScript DOM manipulation and event listeners etc. We made a full fledged Yelp-like application complete with user login,
        authentication and commenting system. After that I did two more courses in JavaScript and React.js and learnt the following
        skills.     
        </span>       
        <SkillsCollection/>
    </div>
);

export default Skills;