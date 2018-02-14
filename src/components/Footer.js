import React from 'react';

const Footer = (props) => (

    <div className="footer">
            <a
                className={props.page === 'HUD'?"active":""}
                href="#"
                onClick={props.handleModeSwitch}
            >
                HUD MODE
            </a>
            <a
                className={props.page === 'EDIT' ? "active" : ""}
                href="#"
                onClick={props.handleModeSwitch}
            >
                
                EDIT MODE
            </a>
        
    </div>
);

export default Footer;