import React from 'react';
import { Image } from 'react-bootstrap';
import ProgressiveImage from 'react-progressive-image';


import './gallery-item.styles.scss';


const GalleryItem = imageUrl => (
    <a href={imageUrl.imageUrl} target="_blank" rel="noopener noreferrer" >
        <ProgressiveImage src={imageUrl.imageUrl} placeholder="tiny-image.jpg">
            {src => <Image className='gallery-item' src={src} alt="image" fluid/>}
        </ProgressiveImage>
    </a>
);  

export default GalleryItem;