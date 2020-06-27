import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router,Route, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './about-page.styles.scss';

// import AboutNavigation from '../../components/vertical-nav/vertical-nav.component';
import ContactLinkButtons from '../../components/contact-link-buttons/contact-link-buttons.component';
import About from '../../components/about/about.component';
import Skills from '../../components/skills/skills.component';
import Education from '../../components/education/education.component';
import Hobbies from '../../components/hobbies/hobbies.component';

const AboutPage = (darkMode) =>{ 
    
//     const [navBackground, setNavBackground] = useState(false);

//   const navRef = useRef();
//   navRef.current = navBackground;
//   useEffect(() => {
//     const handleScroll = () => {
//       const show = window.scrollY > 500;
//       if(navRef.current !== show){
//         setNavBackground(show);
//       }
//     }
//     document.addEventListener('scroll', handleScroll);
//     return () => {
//       document.removeEventListener('scroll', handleScroll);
//     }
//   });

  const routes = [
      {path : '/about', name:'About', Component:About},
      {path : '/skills', name:'Skills', Component:Skills},
      {path : '/education', name:'Education', Component:Education},
      {path : '/hobbies', name:'Hobbies', Component:Hobbies}
  ]

    return(
        <div className='about-page'>
            <Router>
            <Row className='first-row'>
                <Col sm={1}>
                    <ContactLinkButtons className="contact-link"/>
                </Col>
                <Col sm={1} className='about-nav'>
                    {
                        routes.map( route =>(
                            <Navbar variant={darkMode ? "light" : "dark"}>
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
                <Col sm={10}>
                <Container className="container">
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
                </Container>
                </Col>
            </Row>
            </Router>
        </div>
        // <div className='vertical-nav'>
        // </div>
        // <Container className='body-container'>
        // </Container>
    )
};

export default AboutPage;