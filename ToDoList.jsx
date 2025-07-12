
import React, { useState } from 'react';
import './ToDoListt.css';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>

      <div className='input-group'>
        <input type="text" placeholder='Enter a task:' value={newTask} onChange={handleInputChange} />
        <button className='add-button' onClick={addTask}>Add Task</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <div className='button-group'>
              <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
              <button className='move-button' onClick={() => moveTaskUp(index)}>Move up</button>
              <button className='move-button' onClick={() => moveTaskDown(index)}>Move down</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
