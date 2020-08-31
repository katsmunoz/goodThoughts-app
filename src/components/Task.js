import React, {useContext} from 'react';
import {TaskListContext} from '../contexts/TaskListContext';

const Task = ({task}) => {
    const {removeTask} = useContext(TaskListContext)

    return (
        <li className="list-item">
                <button className="btn-heart task-btn">
                    <i className="fas fa-heart"></i></button>
            <span>{task.title}</span>
            <div>
                <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    )
}

export default Task; 