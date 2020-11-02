import React from 'react';

import './review-item.styles.scss';

const ReviewItem = ({name, review}) => (
        <blockquote className='review-item'>
            {review}
            <span>-{name}</span>
        </blockquote>
);

export default ReviewItem;