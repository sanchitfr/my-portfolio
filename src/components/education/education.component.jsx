import React from 'react';

import { Row, Col } from 'react-bootstrap';

import './education.styles.scss';

import EducationCollection from '../education-collection/education-collection.component';

const Education = () => (
    <Row id='education'>
        <Col xs={12}>
            <div className='about-heading'>Education</div>
                <span className='about-text'> I've studied electrical engineering from Thapar University where I was fortunate
                enough to work on various microcontrollers and processors. And incidently, that is how I was introduced to coding. I've been
                a huge physics nerd thorughout my life pretty much because it made me question the existence of everything around me.
                </span>                
            <Col xs={12}>
                <EducationCollection/>
            </Col>
        </Col>            
    </Row>            
);

export default Education;