import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const AboutNavigation = () => (
    // <Navbar defaultActiveKey="/home" className=" vertical-nav">
    //     <Nav.Link href="/home">Skills</Nav.Link>
    //     <Nav.Link eventKey="link-1">Education</Nav.Link>
    //     <Nav.Link eventKey="link-2">Hobbies</Nav.Link>
    // </Navbar>

    <Navbar variant="light">
        <Nav>
        <Nav.Link href="/">Skills</Nav.Link>
        <Nav.Link href="/">Education</Nav.Link>
        <Nav.Link href="/">Hobbies</Nav.Link>
        </Nav>
    </Navbar>
);

export default AboutNavigation;