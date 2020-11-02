import React, {useEffect, Fragment} from 'react';
import { connect } from 'react-redux';
// import firebase from 'firebase/app';
import { ListGroup } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';

import './review-collection.styles.scss';

import ReviewItem from '../review-item/review-item.component';
import Spinner from '../Spinner';
import { fetchReviews } from '../../redux/reviews/review.actions';

const ReviewsCollection = ({ fetchReviews, reviews: {reviewCollection, loading} }) => {
    const darkMode = useDarkMode(false);

    useEffect(() => {
        fetchReviews();
    },[fetchReviews]);

    return(
        loading ? <Fragment><Spinner/></Fragment>
        :
        <div>
            <ListGroup className='review-list'>
                {
                    // console.log("inside return", reviews)
                    // retrieveReviews().then(reviews => {
                        reviewCollection.map(curr =>
                            <ListGroup.Item id='review-item' className={`review-list-item ${darkMode.value ? "dark" : "light"}`} md={12}>
                                <ReviewItem review={curr.review} name={curr.name} key={curr.uid}/>                                              
                            </ListGroup.Item>                 
                        )              
                    // })
                    
                }
            </ListGroup>
        </div>
    )
};

const mapStateToProps = state => ({
    reviews : state.reviews
})

export default connect(mapStateToProps, { fetchReviews })(ReviewsCollection);