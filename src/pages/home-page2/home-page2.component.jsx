import React from 'react';
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from 'react-dark-mode-toggle';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';

import './home-page2.styles.scss';

import ContactLinkButtons from '../../components/contact-link-buttons/contact-link-buttons.component'; 

const HomePage2 = props => {
    
    const darkMode = useDarkMode(false);

    return(
    <div className='home-page'>
        <Row className={`first-row ${props.darkMode? 'dark' : 'light'}`}>
            <Col xs={1}>
                <DarkModeToggle
                onChange={darkMode.toggle}
                checked={darkMode.value}
                size={35}
                speed={0.9}     
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
            <Col md={8} className='second-row-first-col'>
                <Row className='project-row'>
                    <a href="/projects">
                        <Container className='project-container'>
                            <div className='image'><img src={require('../../images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg')} alt='project'/></div>
                            <div className="overlay">
                                <div className='heading-text'>
                                    Projects
                                </div>
                            </div>
                        </Container>
                    </a>
                </Row>
                <Row className='gallery-and-review-row'>
                        <Col className='gallery-container'>
                            <a href="/gallery">
                                <img src={require('../../images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg')} alt='gallery'/>
                                <div className='overlay'>
                                    <div className='heading-text'>Gallery</div>
                                </div>
                            </a>
                        </Col>
                        <Col className='review-container'>
                            <a href="/reviews">
                                <img src={require('../../images/patrick-perkins-ETRPjvb0KM0-unsplash.jpg')} alt='gallery'/>
                                <div className='overlay'>
                                    <div className='heading-text'>Review</div>
                                </div>
                            </a>
                        </Col>
                </Row> 
            </Col>
            <Col md={4} className={`second-row-second-col ${props.darkMode? 'dark' : 'light'}`}>
                <a href="/contact">
                    <Container className='contact-container'>
                        <img src={require('../../images/leo-roomets-i1EfZU4MC-k-unsplash.jpg')} alt='contact'/>
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