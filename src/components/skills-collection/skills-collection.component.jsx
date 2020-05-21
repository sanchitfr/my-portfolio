import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './skills-collection.styles.scss'

import SkillItem from '../skill-item/skill-item.component';
import SKILLS_DATA from './skills-data'

const SkillsCollection = () => {
    const { skills } = SKILLS_DATA;
    return (
        <Container>
            <Row>
                {
                    skills.map(({ imageUrl, title, uid }) => 
                        <Col sm={12} md={4} lg={3}>
                            <SkillItem key={uid} imageUrl={imageUrl} title={title}/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
};

export default SkillsCollection;