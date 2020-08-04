import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import './contact-page.styles.scss';
import CONTACT_DATA from './contact-data';

import NavbarComponent from '../../components/navbar/navbar.component';
import ContactItem from '../../components/contact-item/contact-item.component';
import ContactPopover from '../../components/contact-item/contact-popover.component';


const ContactPage = () => {
    const {contacts} = CONTACT_DATA;
    return(
    <div className='contact-page'>
        <Container fluid>
            <Row className="min-vh-100 flex-column flex-md-row">
                <NavbarComponent/>
                <Col className="bg-faded flex-grow-1">
                    <div className='heading'>Contact Me</div>
                    <Row className="contact-collection">
                        {
                            contacts.map( (contact, index) => {
                                if(index !== 1){
                                    return(
                                        <Col xs={6} md={4}><ContactItem icon={contact.icon} color={contact.color} name={contact.name} link={contact.link}/></Col> 
                                    ) 
                                }
                                return(
                                    <Col xs={6} md={4}><ContactPopover icon={contact.icon} color={contact.color} name={contact.name} link={contact.link}/></Col>
                                )
                            })
                        }     
                    </Row>
                </Col>
            </Row>    
        </Container>           
    </div>
)};

export default ContactPage;