import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router,Route, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './about-page.styles.scss';

import About from '../../components/about/about.component';
import Skills from '../../components/skills/skills.component';
import Education from '../../components/education/education.component';
import Hobbies from '../../components/hobbies/hobbies.component';
import NavbarComponent from '../../components/navbar/navbar.component';

const AboutPage = props =>{ 

  const routes = [
      {path : '/about', name:'About', Component:About},
      {path : '/skills', name:'Skills', Component:Skills},
      {path : '/education', name:'Education', Component:Education},
      {path : '/hobbies', name:'Hobbies', Component:Hobbies}
  ]
  const stylesToggle = {
      color : () => {
          if(props.darkMode){
              return "white"
          }
          return "black"
        }
  }

    return(
        <div className='about-page' styles={stylesToggle}>
            <Container fluid>
                <Row className="min-vh-100 flex-column flex-md-row">
                    <NavbarComponent/>
                    <Router>
                    <Col className="bg-faded flex-grow-1">
                        <h2 className="about-heading">About Me</h2>
                        <Row className='first-row'>
                            <Col className='about-nav'>
                                {
                                    routes.map( route =>(
                                        <Navbar variant={props.darkMode ? "dark" : "light"}>
                                            <Nav>
                                                <Nav.Link 
                                                    key={route.path}
                                                    as={NavLink}
                                                    to={route.path}
                                                    activeClassName='active'
                                                    exact>
                                                {route.name}
                                                </Nav.Link>
                                            </Nav>
                                        </Navbar>
                                    ))
                                }
                                <hr/>
                            </Col>
                            </Row>
                            <Row className="second-row">
                            <Col xs={12}>
                            <div className="details-container">
                                {
                                    routes.map(({path, Component}) => (
                                        <Route key={path} exact path={path}>
                                            {
                                                (({match}) =>(
                                                    <CSSTransition
                                                    in={match != null}
                                                    timeout={300}
                                                    classNames="page"
                                                    unmountOnExit
                                                    >
                                                        <div className='page'>
                                                            <Component/>
                                                        </div>
                                                    </CSSTransition>
                                                ))
                                            }
                                        </Route>
                                    ))
                                }
                            </div>
                            </Col>
                        </Row>
                    </Col>
                    </Router>
                </Row>
            </Container>
        </div>

    )
};

export default AboutPage;