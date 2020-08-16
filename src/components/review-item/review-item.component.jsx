import React from 'react';

import './review-item.styles.scss';

const ReviewItem = ({name, review}) => (
    <blockquote className='review-item'>
        <i>{review}</i>
        <p>{name}</p>
    </blockquote>
);

export default ReviewItem;