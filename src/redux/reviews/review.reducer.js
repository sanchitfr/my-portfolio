
const INITIAL_STATE = {
    name : '',
    review : '',
    error : null
}

const reviewReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "REVIEW_SUCCESS" :
            return {
                ...state,
                name : action.payload.username,
                review : action.payload.reviewDetail
            }

        case "REVIEW_FAILURE" :
            return { 
                ...state,
                name : '',
                review : '',
                error : action.payload
            }

        default : 
            return state;
    }
};

export default reviewReducer;