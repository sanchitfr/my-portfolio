import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Form, Row, Col, Container, Button } from 'react-bootstrap';

import './review-page.styles.scss';
import {reviewStart} from '../../redux/reviews/review.actions';
import ReviewsCollection from '../../components/review-collection/review-collection.component';

const ReviewPage = ({reviewStart}) => {

    const [ review, setReview ] = useState({
        username : '',
        reviewDetail : ''
    });

    
    const { username, reviewDetail } = review;

    const handleSubmit = async event => {
        event.preventDefault();
        reviewStart({username, reviewDetail});
        setReview({
            username : '',
            reviewDetail : ''
        })
    }

    const handleChange = event => {
        // console.log(event.target);
        const { name, value } = event.target;
        setReview({
            ...review,
            [name] : value
        })
    }
    
    return(
        <Container className='review-form'>
            <Form onSubmit={handleSubmit} method="POST">
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                    Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        as="input"
                        type="text" 
                        placeholder="Jason"
                        name="username"
                        value={username}
                        onChange = {handleChange} 
                        required
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalReview">
                    <Form.Label column sm={2}>
                    Review
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        as="input"
                        type="textbox" 
                        placeholder="Let me know what you think!" 
                        name="reviewDetail"
                        value={reviewDetail}
                        onChange = {handleChange}
                        required
                    />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
            <div>
                <ReviewsCollection/>
            </div>        
        </Container>




    )
};

const mapDispatchToProps = dispatch => ({
    reviewStart : review => dispatch(reviewStart(review))
})

export default connect(null, mapDispatchToProps)(ReviewPage);