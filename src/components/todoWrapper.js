import React, { useState } from 'react';
import { TodoForm } from './todoForm';
import { Todo } from './todo';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './editTodoForm';
import Demo from './demo'

export const TodoWrapper = () => {
    const [todo, setTodo] = useState([]);

    const addTodo = (task) => {
        setTodo([...todo, { id: uuidv4(), task, completed: false, isEditing: false }]);
    }
    const toggleComplete = id =>{
        setTodo(todo.map(todo=>todo.id===id?
            {...todo, completed:!todo.completed }:todo))
    }
    const deleteTodo=id=>{
        setTodo(todo.filter(todo=>todo.id!==id))
    }
    const editTodoForm =id=>{
        setTodo(todo.map(todo=>todo.id===id?{
            ...todo,isEditing:!todo.isEditing
        }:todo))
    }
    const editTask = (task, id) => {
        setTodo(
          todo.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };
    return (
        <div className='TodoWrapper'>
            <h1>Add Tasks To Todo</h1>
            <Demo />
            <TodoForm addTodo={addTodo} />
            {todo.map((todoItem, index) => (
                todoItem.isEditing?(
                    <EditTodoForm editTodo={editTask}
                    task={todoItem}/>
                ):(
                <Todo task={todoItem} key={index}
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo} editTodoForm={editTodoForm}/>
    )))}
        </div>
    );
}
