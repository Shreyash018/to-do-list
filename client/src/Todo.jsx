import React, { useState } from 'react';
import axios from 'axios';

function Todo(){

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = (e) => {
        
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
          }

       
        axios.post('http://localhost:3001/todo', {tasks, inputValue})
        .then(result => {console.log(result)
            
        })
        .catch(err => console.log(err))
    }

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
      };

    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-info ">
        
        <div className="d-flex gap-3 flex-column justify-content-center align-items-center bg-light p-3 rounded w-45">
        <h1 className="fw-bold">TO-DO-LIST</h1>
          <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Add a New Task'/>
          <button onClick={handleAddTask}>Add Task</button>

          <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                {task}
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </li>
            ))}
          </ul>
        </div>
        </div>
    )
}

export default Todo;