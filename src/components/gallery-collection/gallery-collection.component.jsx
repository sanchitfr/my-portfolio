import React, {useState} from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import './gallery-collection.styles.scss';
import GALLERY_DATA from './gallery.data';
import GalleryItem from '../gallery-item/gallery-item.components';

const GalleryCollection = () => {
    const [index, setIndex] = useState(0);
    const {images} = GALLERY_DATA;
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <Container className='gallery-collection' fluid>
            {/* <Row>
                <Col xs = {12}> */}
                    <Carousel className='carousel' activeIndex={index} onSelect={handleSelect} indicators={false} interval={3000}>
                        {
                            images.map(({imageurl}) => 
                                <Carousel.Item>
                                    <img
                                    className='carousel-images'
                                    src={imageurl}
                                    alt="display"
                                    />
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                {/* </Col> */}
            {/* </Row> */}
                <Row  className='images'>
                        {
                            images.map(({imageurl}) => {
                                return (
                                    <Col className='image-col'md={4}>
                                        <GalleryItem className='image-col-img' imageUrl={imageurl}/>
                                    </Col>
                                )
                            }
                            )
                        }
                </Row>
            {/* // </Row> */}
        </Container>
)};

export default GalleryCollection; 