import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './gallery-collection.styles.scss';
import GALLERY_DATA from './gallery.data';
import GalleryItem from '../gallery-item/gallery-item.components';

const GalleryCollection = () => {
    // const [index, setIndex] = useState(0);
    const {images} = GALLERY_DATA;
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    return(
        <Container className='gallery-collection' fluid>
            {/* <Row>
                <Col xs = {12}> */}
                    
                {/* </Col> */}
            {/* </Row> */}
                <Row  className='images'>
                    <Col className='image-col-img' xs={4}>
                        {
                            images.slice(0, 18).map(({imageurl}) => {
                                return (
                                    <div className='image-col'>
                                        <GalleryItem  imageUrl={imageurl}/>
                                    </div>
                                )
                            }
                            )
                        }
                    </Col>
                    <Col className='image-col-img' xs={4}>
                        {
                            images.slice(18, 33).map(({imageurl}) => {
                                return (
                                    <div className='image-col'>
                                        <GalleryItem imageUrl={imageurl}/>
                                    </div>
                                )
                            }
                            )
                        }
                    </Col>
                    <Col className='image-col-img' xs={4}>
                        {
                            images.slice(33, 46).map(({imageurl}) => {
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