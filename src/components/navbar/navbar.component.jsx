import React from 'react';
import './navbar.styles.scss';

import { Navbar } from 'react-bootstrap';


const NavbarComponent = () => (
    <div>
        <Navbar className='navbar-custom' variant='dark' fixed='top'>
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
        </Navbar>
  </div>
);

export default NavbarComponent;