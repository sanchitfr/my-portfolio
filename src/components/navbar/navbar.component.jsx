import React from 'react';
import './navbar.styles.scss';

import { Navbar, Nav } from 'react-bootstrap';


const NavbarComponent = () => (
    <div>
        <Navbar className='navbar-custom' variant='dark' fixed='top' expand='md'>
            <Navbar.Brand href="#home">
            {/* <img
                alt=""
                src="../../logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            /> */}
            <a href='/'><span>Ss</span></a>
            </Navbar.Brand>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto nav-right'>
                    <Nav.Link href='/reviews'><span>Write a review</span></Nav.Link>
                    <Nav.Link href='#'><span>Projects</span></Nav.Link>
                    <Nav.Link href='#'><span>Contact</span></Nav.Link>
                    <Nav.Link href='#'><span>Gallery</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  </div>
);

export default NavbarComponent;