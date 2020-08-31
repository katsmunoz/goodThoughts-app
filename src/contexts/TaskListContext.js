import React, { createContext, useState } from 'react';
import shortid from 'shortid';

export const TaskListContext = createContext()

const TaskListContextProvider = props => {

    const [tasks, setTasks] = useState([
        { title: 'Hacer yoga para relajarme', id: 1},
        { title: 'Cuidar mi salud', id: 2},
        { title: 'No exigirme tanto', id: 3}
    ])

    const addTask = (title) => {
        setTasks([...tasks, { title, id:shortid() }]);
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTasks([]);
    }

    const markComplete = id => 
    setTasks(id);

    return (
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, markComplete }}>
            {props.children}

        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;