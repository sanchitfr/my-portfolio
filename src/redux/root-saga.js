import { all, call } from 'redux-saga/effects';

import { reviewSagas } from './reviews/review.sagas';

export default function* rootSaga(){
    yield all([
        call(reviewSagas)
    ])
} 