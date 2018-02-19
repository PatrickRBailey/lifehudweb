import React from 'react';
import Task from './Task';

const Tasks = (props) => (
    
    <div className="taskList">
        {
            props.todo.map((todo) => (
                <Task 
                    key={todo}
                    taskText={todo}
                />
            ))
        }
        {
            props.complete.map((complete) => (
                <Task 
                    key={complete}
                    taskText={complete}
                />
            ))
        }
        
    </div>

);

export default Tasks;