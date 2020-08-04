import React from 'react';

import {Card} from 'react-bootstrap';

import './contact-item.styles.scss';


const ContactItem = props => {
    const background = {
        backgroundColor : `${props.color}`,
        width: '100%',
        height: '100%'
    };

    return (
        <div className={`contact-item ${props.color === "#d6249f" ? 'instagram' : null}`}> 
            <a target="_blank" rel="noopener noreferrer" className='contact-link' href={props.link}>   
                <Card style={background} className={`${props.color === "#d6249f" ? 'instagram' : null}`}>
                    <Card.Body>
                        <i style={{"top" : "50%", "left":"50%", "margin-bottom":"30%"}} class={`${props.icon} fa-4x`} ></i>
                        <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                </Card>
            </a>
        </div>
)};

export default ContactItem;