import { combineReducers } from 'redux';

import reviewReducer from './reviews/review.reducer';

const rootReducer = combineReducers({
    review : reviewReducer
});

export default rootReducer;