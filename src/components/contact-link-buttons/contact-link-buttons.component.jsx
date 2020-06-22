import React from 'react';

import './contact-link-buttons.style.scss';

const ContactLinkButtons = () => (
    <div className="contact-link-buttons">
        <a className="btns linkedin" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/sanchitfr/'><i class="fab fa-linkedin-in"></i></a>
        <a className="btns github" target="_blank" rel="noopener noreferrer" href='https://github.com/sanchitfr'><i class="fab fa-github"></i></a>
        <a className="btns gmail" target="_blank" rel="noopener noreferrer" href='https://mail.google.com/mail/?view=cm&fs=1&to=sanchit522@gmail.com'><i class="far fa-envelope"></i></a>
    </div>
);

export default ContactLinkButtons;