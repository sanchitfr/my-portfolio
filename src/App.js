import React, {useEffect, useRef, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
// import { Container } from 'react-bootstrap';

import './App.css';

import NavbarComponent from './components/navbar/navbar.component';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about-page/about-page.component';
import ReviewPage from './pages/review-page/review-page.component';
import GalleryPage from './pages/gallery-page/gallery.component';

const App = () => {

  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 500;
      if(navRef.current !== show){
        setNavBackground(show);
      }
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  });

  // const routes = [
  //   {path : '/', Component:HomePage},
  //   {path : '/reviews', Component:ReviewPage},
  //   {path : '/about', Component:AboutPage}
  // ]

  return (
    <div className="App">
      <NavbarComponent 
        backgroundColor={navBackground ? "black" : "transparent"}
        style={{transition : '0.7s ease'}}
        />
      <Router>
        <Switch>
      {/* <Container className='container'>
        {
          routes.map(({path, Component}) => (
            <Route key={path} exact path={path}>
              {
                ({match}) => (
                  <CSSTransition
                    in={match !== path}
                    timeout={300}
                    classNames='page'
                    unmountOnExit
                  >
                    <div className='page'>
                      <Component/>
                    </div>
                  </CSSTransition>
                )
              }
            </Route>
          ))
        }
        </Container> */}
          <Route exact path='/' component={HomePage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/reviews' component={ReviewPage}/> 
          <Route path='/gallery' component={GalleryPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
