import React from 'react';

import HobbyItem from '../hobby-item/hobby-item.component';
import HOBBY_DATA from './hobby-data';

import './hobbies.styles.scss';

const Hobbies = () => {
    
    const {hobbies} = HOBBY_DATA;

    return(
        <div className='hobbies'>
            <div className='about-heading'>Hobbies</div>
            {
                hobbies.map( hobby => 
                    <HobbyItem hobby={hobby}/>
                )
            }
        </div>
)};

export default Hobbies;