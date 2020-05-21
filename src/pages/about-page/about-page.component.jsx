import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './about-page.styles.scss';

import AboutNavigation from '../../components/vertical-nav/vertical-nav.component';
import SkillsCollection from '../../components/skills-collection/skills-collection.component';

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
                <Col>
                    <span className='heading'>Skills</span>
                    <SkillsCollection/>
                </Col>
            </Row>
        </Container>
        // <div className='vertical-nav'>
        // </div>
        // <Container className='body-container'>
        // </Container>
);

export default AboutPage;