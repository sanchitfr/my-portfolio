import React from 'react';
import { Image } from 'react-bootstrap';

import './gallery-item.styles.scss';


const GalleryItem = imageUrl => (
    <a href={imageUrl.imageUrl} target="_blank" rel="noopener noreferrer" >
        <Image className='gallery-item' src={imageUrl.imageUrl}/>
    </a>
);  

export default GalleryItem;