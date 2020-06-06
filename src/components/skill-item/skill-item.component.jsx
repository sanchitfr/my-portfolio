import React from 'react';

import './skill-item.styles.scss';

import { Image } from 'react-bootstrap';

const SkillItem = ({ imageUrl, title }) => (
        <div className='skill-item'>
            <Image className='skill-logo' src={`${imageUrl}`} alt={`${title}`}/>
            <h3> {title} </h3>
        </div>
);

export default SkillItem;