import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';

import './skills-collection.styles.scss'

import SkillItem from '../skill-item/skill-item.component';
import SKILLS_DATA from './skills-data'

const SkillsCollection = () => {
    const { skills } = SKILLS_DATA;
    // const handleClick = url => {
    //     console.log(url);
    //     // window.location.assign(url)
    // }
    return (
        <Container>
            <Fade left>
                <Row>
                    {
                        skills.map(({ imageUrl, title, uid, url }) =>
                            <Col /*onClick={(url) => handleClick(url)}*/ className='skill-col' sm={12} md={4} lg={3}>
                                <a href={url} target="_blank" rel="noopener noreferrer"> 
                                    <SkillItem key={uid} imageUrl={imageUrl} title={title}/>
                                </a>
                            </Col>
                        )
                    }
                </Row>
            </Fade>
        </Container>
    )
};

export default SkillsCollection;