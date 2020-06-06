import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './education-collection.styles.scss';


import EDUCATION_DATA from './educationData';
import EducationItem from '../education-item/education-item.component';


const EducationCollection = () => {
    const {education} = EDUCATION_DATA; 
    return(
        <Container className='education-collection'>
            <Row>
                {
                    education.map(item => 
                        <Col lg={12} className='education-item'>
                            <EducationItem key={item.uid} educationItem={item}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
};

export default EducationCollection;