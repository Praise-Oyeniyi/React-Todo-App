import React from 'react'

const Task = ({task, onDel, reminder}) => {
    return (
        <div className={`task ${task.reminder? 'reminder': ''}`} onDoubleClick={()=>reminder(task.id)}>
            <h3>{task.text} <i className="fas fa-times" style={{color:'red', cursor:'pointer'}} onClick={()=> onDel(task.id)}></i></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
