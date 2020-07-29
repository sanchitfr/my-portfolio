import React from 'react';

import { Image } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';


import './project-item.styles.scss';


const ProjectItem = (props) => {
    const { title, description, imageUrl, link } = props.project;
    const darkMode = useDarkMode(false);
    return (
        <div className='project-item'>
           <Image className='project-image' src={imageUrl} fluid/>
           <div className="project-overlay">
                <div className={`project-description ${darkMode.value ? "dark" : "light"}`}>
                    <h2 className='project-title'>{title}</h2>
                    <p>{description}</p>
                    <div className='project-link'><a href={link} target="_blank" rel="noopener noreferrer">Visit &#10095;</a></div>
                </div>       
            </div>     
        </div>
    )
};

export default ProjectItem;