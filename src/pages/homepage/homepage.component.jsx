import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

import ContactLinkButtons from '../../components/contact-link-buttons/contact-link-buttons.component';

//add arrow icon after know more
const HomePage = props => (
  <div className={`homepage ${props.darkMode? 'dark' : 'light'}`}>
    <Row>
      <Col className='contact' sm={1}>
        <ContactLinkButtons />
      </Col>
      <Col>
        <div className = 'text'>
          <span className='heading'> Hi! I am Sanchit. </span>
          <span className='paragraph'>Welcome to my portfolio.</span>
          <Link to='/about' ><Button variant={props.darkMode ? "light" : "dark"}>Know more   &#10095;</Button></Link>
        </div>
      </Col>
    </Row>
  </div>
);

export default HomePage;