import React from 'react';
import { Container } from 'react-bootstrap';

import './education-item.styles.scss'

const EducationItem = ({ educationItem }) => {
    const { type, institute, percantage, major, years } = educationItem;

    return(
        <Container className='education-item edu-heading' fluid>
            <div id='type'><i class="fa fa-graduation-cap" aria-hidden="true"/> {type} </div>
            <div id='major'><i class="fa fa-glasses" aria-hidden="true"/> {major}</div>
            <div id='institute'><i class="fa fa-university" aria-hidden="true"/> {institute}</div>
            <span id='percentage'><i class="fa fa-pencil" aria-hidden="true"/> {percantage}</span>
            <span><i class="fa fa-clock" aria-hidden="true"/> {years} </span>
        </Container>
    )
};

export default EducationItem;