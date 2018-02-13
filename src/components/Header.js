import React from 'react';
import moment from 'moment'

export default class Header extends React.Component{
    state = {
        clock: new Date()
    }
    constructor(props) {
        super(props);
        
        setInterval(() => {
            this.setState(() => ({
                clock: new Date()
            }));
        }, 1000);
    }
    render() {
        return (
            <div className="header">
                <h1 className="header__title">LIFEHUD</h1>
                <h2>{moment(this.state.clock).format('h:mm:ss a')}<br />{moment(this.state.clock).format('dddd')}</h2>
                
            </div>
        );
    }
} 