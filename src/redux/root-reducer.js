import { combineReducers } from 'redux';

import reviewReducer from './reviews/review.reducer';

const rootReducer = combineReducers({
    reviews : reviewReducer
});

export default rootReducer;