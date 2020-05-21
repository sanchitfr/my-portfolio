import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

//add arrow icon after know more
const HomePage = () => (
    <div className='homepage'>
      <div className = 'text'>
        <span className='heading'> Hi! I am Sanchit. </span>
        <span className='paragraph'>Welcome to my portfolio.</span>
        <Link to='/about' ><Button variant='dark'>Know more   &#10095;</Button></Link>
      </div>
    </div>
);

export default HomePage;