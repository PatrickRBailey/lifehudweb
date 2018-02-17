import React from 'react';


const Footer = (props) => 
{
    return (

        <div className="footer">
            <button
                className={props.page === 'HUD' ? "active" : ""}
                href="#"
                onClick={props.handleModeSwitch}
                disabled={props.page === 'HUD' ? true : false}
            >
                HUD MODE
            </button>
            <button
                className={props.page === 'EDIT' ? "active" : ""}
                href="#"
                onClick={props.handleModeSwitch}
                disabled={props.page === 'EDIT' ? true : false}
            >

                EDIT MODE
            </button>

        </div>
    );
}


export default Footer;