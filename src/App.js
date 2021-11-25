import React, {useState, useEffect} from 'react';
import AddTask from './Components/AddTask';
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (storedTasks) setTasks(storedTasks)
  }, [])

  // saving the todos in browser storage to prevent loss of todos on refreshing tab
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

    // Add task
    const addTask= (task)=>{
      const id = Math.floor(Math.random() * 10000) + 1;
      const newTask = {id, ...task};
      // setTasks([{ id: Date.now(), title: todo, done: false }, ...todos])
      setTasks ([...tasks, newTask]) ;
    }


  // Delete Task
  const deleteTask = (id)=>{
    setTasks(tasks.filter((tasks)=>tasks.id !==id))
  }

  // set reminder
  const setReminder = (id)=>{
    setTasks(tasks.map((task)=>task.id===id?{...task, reminder: !task.reminder}: task));
    
  };
  const error =()=>{
    "You don't have any pending task"
  }

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length >0?(<Tasks tasks={tasks} onDel={deleteTask} reminder={setReminder}/>) : <h5 className="no-task">You don't have any pending task</h5>}
    </div>
  );
}

export default App;