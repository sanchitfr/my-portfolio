import React, {useState} from 'react';
import firebase from 'firebase/app';
import {  ListGroup } from 'react-bootstrap';

import './review-collection.styles.scss';

import ReviewItem from '../review-item/review-item.component';

const ReviewsCollection = () => {
    
    const [reviews, setReviews] = useState([]);
    const retrieveReviews = () => {
        const db = firebase.firestore();
        db.collection("reviews")
        .get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log("data", data)
            setReviews(data);
        });
    }
    if(reviews.length === 0){
        retrieveReviews();
    }
    console.log("outside", reviews);
    // const allReviews = ( () => {
        //     return retrieveReviews();
        // })();
        // allReviews.then(x => {
            //     //   reviews = x;
            //     setReviews(x)
            //     // x.map( review => {
                //     //     console.log(review);
                //     // });
                // });
                // // const { reviews } = themReviews;
                //   console.log("after then", themReviews);
    return (
        <div>
            <ListGroup variant='flush'>
                {
                    // console.log("inside return", reviews)
                    // retrieveReviews().then(reviews => {
                        reviews.map(curr =>
                            <ListGroup.Item md={12}>
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