import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ProgressiveImage from 'react-progressive-image';
import { Carousel } from 'react-responsive-carousel';

import './gallery.styles.scss';

import GalleryCollection from '../../components/gallery-collection/gallery-collection.component';
import NavbarComponent from '../../components/navbar/navbar.component';
import GALLERY_LANDSCAPES from '../../components/gallery-collection/gallery-only-landscape.data';



const GalleryPage = () => {
    
    const { landscapes } = GALLERY_LANDSCAPES;
    return(
    <div className="gallery-page">
        <Container fluid>
            <Row className="min-vh-100 flex-column flex-md-row">
                <NavbarComponent/>
                <Col className="bg-faded flex-grow-1 gallery-banner">
                    <h1 style={{marginBottom : '20px'}}>Gallery</h1>
                    <Carousel 
                    className='carousel' 
                    showThumbs={false} 
                    showIndicators={false} 
                    showStatus={false}
                    infiniteLoop
                    transitionTime={800}
                    interval={5000}
                    autoPlay>
                        {
                            landscapes.map(({imageUrl}) => 
                                <ProgressiveImage src={imageUrl} placeholder="tiny-image.jpg">
                                    {src => <Image className='carousel-images' src={src} alt="display" fluid/>}
                                </ProgressiveImage>
                                    // <Image src={imageUrl} alt="display" fluid/>
                            )
                        }
                    </Carousel>
                </Col>
                <GalleryCollection/>
            </Row>
        </Container>
    </div>
)};

export default GalleryPage;