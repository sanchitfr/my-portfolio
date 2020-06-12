import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import {  ListGroup } from 'react-bootstrap';

import './review-collection.styles.scss';

import ReviewItem from '../review-item/review-item.component';

const ReviewsCollection = () => {
    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection("reviews")
        .get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log("data", data)
            setReviews(data);
        });
    },[]);
    console.log("outside", reviews);
    return (
        <div>
            <ListGroup className='review-list'>
                {
                    // console.log("inside return", reviews)
                    // retrieveReviews().then(reviews => {
                        reviews.map(curr =>
                            <ListGroup.Item className='review-list-item' md={12}>
                                <ReviewItem review={curr.review} name={curr.name}/>                                              
                            </ListGroup.Item>                 
                        )              
                    // })
                    
                }
            </ListGroup>
        </div>
    )
};

export default ReviewsCollection;