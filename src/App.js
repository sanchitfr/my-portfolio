import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Navbar, Nav } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from 'react-dark-mode-toggle';

import './App.css';


import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about-page/about-page.component';
import ReviewPage from './pages/review-page/review-page.component';
import GalleryPage from './pages/gallery-page/gallery.component';
import ContactPage from './pages/contact-page/contact-page.component';

const App = () => {
  const darkMode = useDarkMode(false);
  // const [navBackground, setNavBackground] = useState(false);

  // const navRef = useRef();
  // navRef.current = navBackground;
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY > 500;
  //     if(navRef.current !== show){
  //       setNavBackground(show);
  //     }
  //   }
  //   document.addEventListener('scroll', handleScroll);
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   }
  // });

  const routes = [
    {path : '/', Component:HomePage, name : 'Ss'},
    {path : '/about', Component:AboutPage, name:"About" },
    {path : '/contact', Component:ContactPage, name:"Contact"},
    {path : '/gallery', Component:GalleryPage, name:"Gallery"},
    {path : '/reviews', Component:ReviewPage, name: "Write a review"}

  ]

  return (
    <div className="App">
      <Router>
          <Navbar className="main-nav" expand="md" bg="transparent" variant={darkMode.value ? "dark" : "light"} fixed="top">
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
                        activeClassName='active'
                        exact>
                        {route.name}
                      </Nav.Link>          
                    )
                  }
                  return(
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                      <Nav className="ml-auto nav-right">
                        <Nav.Link
                          key={route.path}
                          as={NavLink}
                          to={route.path}
                          activeClassName='active'
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
                size={40}
                />
              </Nav.Link>
            </Nav>
          </Navbar>
      <div className='all-data' fluid>
        {
          routes.map(({path, Component}) => (
            <Route key={path} exact path={path}>
              {
                ({match}) => (
                  <CSSTransition
                    in={match !== null}
                    timeout={300}
                    classNames='page'
                    unmountOnExit
                  >
                    <div className='page'>
                      {/* {
                        Component === AboutPage ? <Component darkMode={darkMode.value}/> : <Component/>
                      } */}
                      <Component darkMode={darkMode.value}/>
                    </div>
                  </CSSTransition>
                )
              }
            </Route>
          ))
        }
        </div>
      </Router>
    </div>
  );
}

export default App;
