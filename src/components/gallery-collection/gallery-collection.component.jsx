import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './gallery-collection.styles.scss';
import GALLERY_DATA from './gallery.data';
import GALLERY_LANDSCAPES  from './gallery-only-landscape.data.js'
import GalleryItem from '../gallery-item/gallery-item.components';

const GalleryCollection = () => {
    // const [index, setIndex] = useState(0);
    const {images} = GALLERY_DATA;
    const { landscapes } = GALLERY_LANDSCAPES;
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    return(
        <Container className='gallery-collection' fluid>
            {/* <Row>
                <Col xs = {12}> */}
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
                                <div>
                                    <img
                                    className='carousel-images'
                                    src={imageUrl}
                                    alt="display"
                                    />
                                </div>
                            )
                        }
                    </Carousel>
                {/* </Col> */}
            {/* </Row> */}
                <Row  className='images'>
                    <Col className='image-col-img' md={4}>
                        {
                            images.slice(0, 16).map(({imageurl}) => {
                                return (
                                    <div className='image-col'md={4}>
                                        <GalleryItem  imageUrl={imageurl}/>
                                    </div>
                                )
                            }
                            )
                        }
                    </Col>
                    <Col className='image-col-img' md={4}>
                        {
                            images.slice(16, 31).map(({imageurl}) => {
                                return (
                                    <div className='image-col'>
                                        <GalleryItem imageUrl={imageurl}/>
                                    </div>
                                )
                            }
                            )
                        }
                    </Col>
                    <Col className='image-col-img' md={4}>
                        {
                            images.slice(31, 46).map(({imageurl}) => {
                                return (
                                    <div className='image-col'md={4}>
                                        <GalleryItem imageUrl={imageurl}/>
                                    </div>
                                )
                            }
                            )
                        }
                    </Col>
                </Row>
            {/* // </Row> */}
        </Container>
)};

export default GalleryCollection; 