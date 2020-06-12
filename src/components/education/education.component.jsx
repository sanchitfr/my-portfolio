import React from 'react';

import { Row, Col } from 'react-bootstrap';

import EducationCollection from '../education-collection/education-collection.component';

const Education = () => (
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
);

export default Education;