import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router,Route, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import './about-page.styles.scss';

// import AboutNavigation from '../../components/vertical-nav/vertical-nav.component';
import About from '../../components/about/about.component';
import Skills from '../../components/skills/skills.component';
import Education from '../../components/education/education.component';
import Hobbies from '../../components/hobbies/hobbies.component';

const AboutPage = () =>{ 
    
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
        <Container fluid className='about-page'>
            <Row xs={1}>
                <Router>
                <Col className='about-nav'>
                    {
                        routes.map( route =>(
                            <Navbar variant="light">
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
                </Col>
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
                <hr/>
                </Router>
            </Row>
        </Container>
        // <div className='vertical-nav'>
        // </div>
        // <Container className='body-container'>
        // </Container>
    )
};

export default AboutPage;