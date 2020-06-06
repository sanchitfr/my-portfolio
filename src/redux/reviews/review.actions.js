
export const reviewStart = review => ({
    type : "REVIEW_START",
    payload : review
});

export const reviewSuccess = review => ({
    type : "REVIEW_SUCCESS",
    payload : review
});

export const reviewFailure = error => ({
    type : "REVIEW_FAILURE",
    payload : error
});