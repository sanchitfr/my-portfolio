import React from 'react';

import './review-item.styles.scss';

const ReviewItem = ({name, review, time}) => (
    // console.log(reviewDat)
    <div>
        <span>{name} said {review}</span>
        <span>{time}</span>
    </div>
);

export default ReviewItem;