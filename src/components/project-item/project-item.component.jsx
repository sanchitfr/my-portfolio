import React from 'react';

import { Container, Image } from 'react-bootstrap';

import './project-item.styles.scss';


const ProjectItem = (props) => {
    const { title, description, imageUrl } = props.project;
    console.log(title, description, imageUrl);
    return (
        <Container className='project-item'>
           <Image className='project-image' src={imageUrl} fluid/>
           <div className="project-overlay">
                <div className="project-description">
                    <h2 className='project-title'>{title}</h2>
                    <p>{description}</p>
                    <a href='/'>Visit &#10095;</a>
                </div>       
            </div>     
        </Container>
    )
};

export default ProjectItem;