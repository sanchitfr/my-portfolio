import React from 'react';
import useDarkMode from 'use-dark-mode';

import {Card} from 'react-bootstrap';

import './hobby-item.styles.scss'

const HobbyItem = ({hobby}) => {
    const darkMode = useDarkMode(false);
    const imageUrl = darkMode.value ? hobby.darkImage : hobby.lightImage;
    return(
    <div className={`hobby-div ${darkMode.value? 'dark' : 'light'}`}>
    <Card className={`hobby-item ${darkMode.value? 'dark' : 'light'}`}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
        <Card.Title>{hobby.title}</Card.Title>
            <Card.Text>
            {hobby.description}
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
)};

export default HobbyItem;

