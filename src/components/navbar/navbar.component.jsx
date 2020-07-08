import React from 'react';
import './navbar.styles.scss';

import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from 'react-dark-mode-toggle';


import AboutPage from '../../pages/about-page/about-page.component';
import ReviewPage from '../../pages/review-page/review-page.component';
import GalleryPage from '../../pages/gallery-page/gallery.component';
import ContactPage from '../../pages/contact-page/contact-page.component';
import ProjectPage from '../../pages/projects-page/projects-page.component';

import HomePage2 from '../../pages/home-page2/home-page2.component';

const NavbarComponent = () => {
    const darkMode = useDarkMode(false);
    const routes = [
        {path : '/', Component:HomePage2, name : 'Ss'},
        // {path : '/home2', Component:HomePage2, name: "HomePage2"},
        {path : '/about', Component:AboutPage, name:"About" },
        {path : '/projects', Component:ProjectPage, name:"Projects" },
        {path : '/contact', Component:ContactPage, name:"Contact"},
        {path : '/gallery', Component:GalleryPage, name:"Gallery"},
        {path : '/reviews', Component:ReviewPage, name: "Write a review"}
    ]

    return(
    <div>
        <Navbar className="main-nav" expand="md" bg="transparent" variant={darkMode.value ? "dark" : "light"} >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav>
              {
                routes.map( (route, index) =>{
                  if(index === 0){
                    return(
                      <Nav.Link 
                        key={route.path}
                        as={NavLink}
                        to={route.path}
                        exact>
                        {route.name}
                      </Nav.Link>          
                    )
                  }
                  return(
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                      <Nav>
                        <Nav.Link
                          key={route.path}
                          as={NavLink}
                          to={route.path}
                          exact>
                          {route.name}
                        </Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  )
                })        
              }
              <Nav.Link>
                <DarkModeToggle
                onChange={darkMode.toggle}
                checked={darkMode.value}
                size={35}
                speed={0.9}
                />
              </Nav.Link>
            </Nav>
        </Navbar>
  </div>
)};

export default NavbarComponent;