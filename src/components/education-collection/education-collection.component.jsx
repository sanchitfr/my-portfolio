import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';

import './education-collection.styles.scss';


import EDUCATION_DATA from './educationData';
import EducationItem from '../education-item/education-item.component';


const EducationCollection = () => {
    const {education} = EDUCATION_DATA; 
    return(
        <div className='education-collection'>
            <Row>
                {
                    education.map(item => 
                        <Col lg={12}>
                            <Fade>
                            <EducationItem key={item.uid} educationItem={item}/>
                            </Fade>
                        </Col>
                    )
                }
            </Row>
        </div>
    )
};

export default EducationCollection;