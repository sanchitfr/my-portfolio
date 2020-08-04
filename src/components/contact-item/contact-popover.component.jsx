import React from 'react';

import {Card, Popover, OverlayTrigger} from 'react-bootstrap';

import './contact-item.styles.scss';


const ContactPopover = props => {
    const background = {
        backgroundColor : `${props.color}`,
        width: '100%',
        height: '100%',
        color: "black"
    };

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Phone Number</Popover.Title>
          <Popover.Content>
            Contact me on +91 9646859350 or +91 7986392778
          </Popover.Content>
        </Popover>
    );

    return (
        <div className="contact-item"> 
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <Card style={background}>
                    <Card.Body>
                        <i style={{"top" : "50%", "left":"50%", "margin-bottom":"30%"}} class={`${props.icon} fa-4x`} ></i>
                        <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                </Card>
            </OverlayTrigger>
        </div>
)};

export default ContactPopover;