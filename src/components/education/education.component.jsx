import React from 'react';

import { Row, Col } from 'react-bootstrap';

import './education.styles.scss';

import EducationCollection from '../education-collection/education-collection.component';

const Education = () => (
    <Row className='education'>
        <Col xs={12}>
            <div className='about-heading'>Education</div>
                <span className='about-text'> I started learning web development from a course which taught it from scratch, HTML elements, css classes and IDs,
                javaScript DOM manipulation and event listeners etc. We made a full fledged Yelp-like application complete with user login,
                authentication and commenting system. After that I did two more courses in JavaScript and React.js and learnt the following
                skills.     
                </span>                
            <Col xs={12}>
                <EducationCollection/>
            </Col>
        </Col>            
    </Row>            
);

export default Education;