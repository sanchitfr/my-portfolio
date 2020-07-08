import React from 'react';

import GalleryCollection from '../../components/gallery-collection/gallery-collection.component';
import NavbarComponent from '../../components/navbar/navbar.component';


const GalleryPage = () => (
    <div className="gallery-page">
        <NavbarComponent/>
        <h1>Gallery</h1>
        <GalleryCollection/>
    </div>
);

export default GalleryPage;