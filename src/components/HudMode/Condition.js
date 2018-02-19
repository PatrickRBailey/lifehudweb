import React from 'react';

const Condition = (props) => (
    <div className="condition">
        <h1 className="condition__text">Condition: {props.condition}%</h1>
        <hr />
    </div>
);

export default Condition;
