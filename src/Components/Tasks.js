import React from 'react';
import Task from './Task'

const Tasks = ({tasks, onDel, reminder}) => {
    return (
        <>
            {tasks.map((task)=> (<Task key={task.id} task={task} onDel={onDel} reminder={reminder}/>))}
        </>
    )
}

export default Tasks
