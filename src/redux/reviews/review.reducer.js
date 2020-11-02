import { FETCH_REVIEWS, ADD_REVIEW } from './types';
const INITIAL_STATE = {
    reviewCollection : [],
    loading: true
}

const reviewReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type){
        case FETCH_REVIEWS :
            return {
                ...state,
                reviewCollection : payload,
                loading: false
            }

        case ADD_REVIEW :
            return { 
                ...state,
                loading: false
            }

        default : 
            return state;
    }
};

export default reviewReducer;