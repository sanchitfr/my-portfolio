import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import useDarkMode from 'use-dark-mode';

import './App.css';


import AboutPage from './pages/about-page/about-page.component';
import ReviewPage from './pages/review-page/review-page.component';
import GalleryPage from './pages/gallery-page/gallery.component';
import ContactPage from './pages/contact-page/contact-page.component';
import ProjectPage from './pages/projects-page/projects-page.component';

import HomePage2 from './pages/home-page2/home-page2.component';

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
    {path : '/', Component:HomePage2, name : 'Ss'},
    // {path : '/home2', Component:HomePage2, name: "HomePage2"},
    {path : '/about', Component:AboutPage, name:"About" },
    {path : '/projects', Component:ProjectPage, name:"Projects" },
    {path : '/contact', Component:ContactPage, name:"Contact"},
    {path : '/gallery', Component:GalleryPage, name:"Gallery"},
    {path : '/reviews', Component:ReviewPage, name: "Feedback"}
  ]

  return (
    <div className="App">
      <Router>          
      {/* <NavbarComponent/> */}
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
