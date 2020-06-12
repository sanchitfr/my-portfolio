import React from 'react';

import './review-item.styles.scss';

const ReviewItem = ({name, review, time}) => (
    // console.log(reviewDat)
    <blockquote className='review-item'>
        <i>{review}</i>
        <p>{name}</p>
        <span>{time}</span>
    </blockquote>
);

export default ReviewItem;