import React from 'react';
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from 'react-dark-mode-toggle';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';

import './home-page2.styles.scss';

import ContactLinkButtons from '../../components/contact-link-buttons/contact-link-buttons.component'; 

const HomePage2 = props => {
    
    const darkMode = useDarkMode(false);
    const projectImage = !props.darkMode ? 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' : 'https://images.unsplash.com/photo-1543196614-e046c7d3d82e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=898&q=80';
    const galleryImage = !props.darkMode ? 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' : 'https://images.unsplash.com/photo-1506574723610-7fe0f0c7f9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
    const contactImage = !props.darkMode ? 'https://images.unsplash.com/photo-1495899370433-cb0c74293fdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' : 'https://images.unsplash.com/photo-1567715610953-8be4eda430b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80';
    const reviewImage = !props.darkMode ? 'https://images.unsplash.com/photo-1503551723145-6c040742065b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' : 'https://images.unsplash.com/photo-1478641300939-0ec5188d3802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80';
    return(
    <div className={`home-page ${props.darkMode ? "dark" : "light"}`}>
        <Row className={`first-row ${props.darkMode? 'dark' : 'light'}`}>
            <Col xs={1}>
                <DarkModeToggle
                onChange={darkMode.toggle}
                checked={darkMode.value}
                size={35}
                speed={2}     
                />
                <ContactLinkButtons/>
            </Col>
            <Col>
                <div className = 'home-banner'>
                    <span className='heading'> Hi! I am Sanchit. </span>
                    <span className='paragraph'>Welcome to my portfolio.</span>
                    <Link to='/about' ><Button variant={props.darkMode ? "light" : "dark"}>Know more   &#10095;</Button></Link>
                </div>
            </Col>
        </Row>
        <Row className="second-row">
            <Col md={8}  className='second-row-first-col'>
                <Row className='project-row'>
                    <a href="/projects">
                            <Container className={`project-container ${props.darkMode? 'dark' : 'light'}`}>
                                <div className='image'><Image src={projectImage} alt='project' fluid/></div>
                                <div className="overlay">
                                    <div className='heading-text'>
                                        Projects
                                    </div>
                                </div>
                            </Container>
                    </a>
                </Row>
                <Row className='gallery-and-review-row'>
                        <Col md={6} xs={12} className={`gallery-container ${props.darkMode? 'dark' : 'light'}`}>
                            <a href="/gallery">
                                <Image src={galleryImage} alt='gallery' fluid/>
                                <div className='overlay'>
                                    <div className='heading-text'>Gallery</div>
                                </div>
                            </a>
                        </Col>
                        <Col md={6} xs={12} className={`review-container ${props.darkMode? 'dark' : 'light'}`}>
                            <a href="/reviews">
                                <Image src={reviewImage} alt='review' fluid/>
                                <div className='overlay'>
                                    <div className='heading-text'>Feedback</div>
                                </div>
                            </a>
                        </Col>
                </Row> 
            </Col>
            <Col md={4} sm={12} className={`second-row-second-col ${props.darkMode? 'dark' : 'light'}`}>
                <a href="/contact">
                    <Container className='contact-container'>
                        <Image src={contactImage} alt='contact' fluid/>
                        <div className='overlay'>
                            <div className='heading-text'>Contact</div>
                        </div>
                    </Container>
                </a>
            </Col>
        </Row>
    </div>    
)};

export default HomePage2;