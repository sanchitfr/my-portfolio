import React from 'react';

// import {Row} from 'react-bootstrap';

import ProjectItem from '../project-item/project-item.component';
import PROJECT_DATA from './projectData';



const ProjectCollection = () => {
    const {projects} = PROJECT_DATA;
    
    return(
        <div className='project-collection'>
            {
                projects.map(project => {
                    const {title} = project;
                    return(
                        <div className="project-collection">
                            <h2>{title.toUpperCase()}</h2>
                            <ProjectItem project={project}/>    
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ProjectCollection;