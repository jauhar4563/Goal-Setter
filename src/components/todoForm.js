import React, { useState } from 'react';


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [error, setError] = useState("");
    const handleSubmit = e =>{
      e.preventDefault();
      if (!value.trim()) {
        setError("Task cannot be empty");
        return;
      }
        setError("");
        addTodo(value);
        setValue("");
    }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type = "text" className='todo-input'
        placeholder='What is the task today?'
        value = {value}
        onChange={(e)=>{setValue(e.target.value);
          setError("");}}
        />
        <button type = 'submit' className='todo-btn'>
        Add Task</button>
        {error && <p className="error-message">{error}</p>}
    </form>
  )
}
