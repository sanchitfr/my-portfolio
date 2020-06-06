import { takeLatest, all, call, put } from 'redux-saga/effects';

import { reviewSuccess, reviewFailure } from './review.actions';

import { addReview } from '../../firebase/firebase.utils';


function* reviewSubmitSuccess({ payload }){
    try{
        yield put(reviewSuccess({...payload}));
    }catch(error){
        yield put(reviewFailure(error));
    }
}

function* addDisplayReview({ payload : { username, reviewDetail }}){
    try{
        yield addReview({username, reviewDetail});
    }catch(error){
        yield put(reviewFailure(error));
    }
}

export function* onReviewStart(){
    yield takeLatest( "REVIEW_START", reviewSubmitSuccess );
};

export function* onReviewSuccess(){
    yield takeLatest("REVIEW_SUCCESS", addDisplayReview)
}

export function* reviewSagas(){
    yield all([
        call(onReviewStart),
        call(onReviewSuccess)
    ]);
}