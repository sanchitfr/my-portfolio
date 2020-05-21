import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import NavbarComponent from './components/navbar/navbar.component';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about-page/about-page.component';


const App = () => {
  return (
    <div className="App">
      <NavbarComponent/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
      </Switch>
    </div>
  );
}

export default App;
