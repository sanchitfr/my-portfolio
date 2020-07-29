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
        {path : '/', Component:HomePage2, name : 'Home', icon : "fas fa-house-user"},
        // {path : '/home2', Component:HomePage2, name: "HomePage2"},
        {path : '/about', Component:AboutPage, name:"About", icon: "fas fa-tasks" },
        {path : '/projects', Component:ProjectPage, name:"Projects", icon:"fas fa-briefcase" },
        {path : '/contact', Component:ContactPage, name:"Connect", icon:"fas fa-globe"},
        {path : '/gallery', Component:GalleryPage, name:"Gallery", icon:"far fa-image"},
        {path : '/reviews', Component:ReviewPage, name: "Feedback", icon:"fas fa-edit"}
    ]

    return(
      <aside className={`col-12 col-md-3 p-0 flex-shrink-1`}>
        <Navbar className="flex-md-column flex-row align-items-start py-2" bg="transparent" variant={darkMode.value ? "dark" : "light"}>
            <Navbar.Collapse>
            <ul className={`flex-md-column flex-row navbar-nav w-100 px-2 justify-content-between ${darkMode.value ? "dark" : "light"}`}>
              {
                routes.map( (route) =>{
                  return(
                      <li className='py-3 justify-content-center'>
                        <Nav.Link
                          key={route.path}
                          as={NavLink}
                          to={route.path}
                          exact>
                          <i class={`${route.icon} px-2`}></i>
                          <span className="d-none d-md-inline py-3">{route.name}</span>
                        </Nav.Link>
                      </li>
                  )
                })        
              }
                <li>
                  <div className={`d-none d-md-inline contact-btns px-1 ${darkMode.value ? "dark" : "light"}`}>
                    <a className="btn" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/sanchitfr/'><i class="fab fa-linkedin"></i></a>
                    <a className="btn" target="_blank" rel="noopener noreferrer" href='https://github.com/sanchitfr'><i class="fab fa-github-square"></i></a>
                    <a className="btn" target="_blank" rel="noopener noreferrer" href='https://mail.google.com/mail/?view=cm&fs=1&to=sanchit522@gmail.com'><i class="fas fa-envelope"></i></a>
                  </div>
                </li>
                <li className='py-3 justify-content-center'>
                  <Nav.Link>
                    <DarkModeToggle
                    onChange={darkMode.toggle}
                    checked={darkMode.value}
                    size={35}
                    speed={0.9}
                    />
                  </Nav.Link>
                </li>
              </ul>
            </Navbar.Collapse>
        </Navbar>
        </aside>
)};

export default NavbarComponent;