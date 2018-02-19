import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const Task = (props) => (
    <div className="task">
            <p className="task__text">{props.taskText}</p>
        
            <CircularProgressbar percentage={60} className="progressBar" />
            

    </div>
);

export default Task;