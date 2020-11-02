import { FETCH_REVIEWS, ADD_REVIEW } from './types';
import {retrieveReviews, addReview} from '../../firebase/firebase.utils';

export const fetchReviews = () => async dispatch => {
    const reviews = await retrieveReviews();
    dispatch({
        type: FETCH_REVIEWS,
        payload: reviews
    })
}

export const sendReview = (review) => async dispatch => {
    addReview(review);
    dispatch({
        type: ADD_REVIEW
    })
    dispatch(fetchReviews());
}















// export const reviewStart = review => ({
//     type : "REVIEW_START",
//     payload : review
// });

// export const reviewSuccess = review => ({
//     type : "REVIEW_SUCCESS",
//     payload : review
// });

// export const reviewFailure = error => ({
//     type : "REVIEW_FAILURE",
//     payload : error
// });