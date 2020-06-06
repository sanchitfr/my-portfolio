import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './about-page.styles.scss';

import AboutNavigation from '../../components/vertical-nav/vertical-nav.component';
import SkillsCollection from '../../components/skills-collection/skills-collection.component';
import EducationCollection from '../../components/education-collection/education-collection.component';

const AboutPage = () => (
        <Container fluid className='about-page'>
            <Row xs={1}>
                <Col className='heading-text'>
                    <div className='heading'>About Me</div>
                    <span>I am a tech enthusiast and a web developer with focus on making good looking, efficient web apps with DRY, 
                        reusable and readable code. Ever since  I started coding, I saw the amazing websites people made and published
                        and I always wanted to learn the art of making websites. This curiosity pushed me to learn web development, so 
                        I picked up some courses and started learning! </span>
                </Col>
                <Col className='about-nav'>
                    <AboutNavigation/>
                </Col>
                <hr/>
                <Col className='skills'>
                    {/* <a name="#skills"/> */}
                    <div className='heading'>Skills</div>
                    <span> I started learning web development from a course which taught it from scratch, HTML elements, css classes and IDs,
                        javaScript DOM manipulation and event listeners etc. We made a full fledged Yelp-like application complete with user login,
                        authentication and commenting system. After that I did two more courses in JavaScript and React.js and learnt the following
                        skills.     
                    </span>
                    <SkillsCollection/>
                </Col>
            </Row>
            <Row>
                <Col className='education'>
                    <div className='heading'>Education</div>
                    <span> I started learning web development from a course which taught it from scratch, HTML elements, css classes and IDs,
                        javaScript DOM manipulation and event listeners etc. We made a full fledged Yelp-like application complete with user login,
                        authentication and commenting system. After that I did two more courses in JavaScript and React.js and learnt the following
                        skills.     
                    </span>
                    <Col>
                        <EducationCollection/>  
                    </Col>
                </Col>
            </Row>
        </Container>
        // <div className='vertical-nav'>
        // </div>
        // <Container className='body-container'>
        // </Container>
);

export default AboutPage;