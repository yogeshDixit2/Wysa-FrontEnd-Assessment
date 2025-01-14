import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ToDoManager.css"; 
const ToDoManager = ({ userId }) => {
 const [todos, setTodos] = useState([]);
 const [newTodo, setNewTodo] = useState("");
 const [toastMessage, setToastMessage] = useState("");
 useEffect(() => {
   axios
     .get(`https://dummyjson.com/todos/user/${userId}`)
     .then((response) => setTodos(response.data.todos))
     .catch((error) => console.error("Error fetching todos:", error));
 }, [userId]);
 const showToast = (message) => {
   setToastMessage(message);
   setTimeout(() => setToastMessage(""), 3000);
 };
 const addTodo = () => {
   if (!newTodo) return;
   const newToDoItem = {
     id: todos.length + 1, 
     todo: newTodo,
     completed: false,
   };
   setTodos((prevTodos) => [...prevTodos, newToDoItem]);
   setNewTodo("");
   showToast("To-do added successfully!");
 };
 const deleteTodo = (id) => {
   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
   showToast("To-do deleted successfully!");
 };
 return (
<div className="todo-container">
<h2>To-Dos</h2>
     {toastMessage && <div className="toast-message">{toastMessage}</div>}
<div className="input-section">
<input
         type="text"
         value={newTodo}
         onChange={(e) => setNewTodo(e.target.value)}
         placeholder="Add a new to-do"
       />
<button onClick={addTodo}>Add</button>
</div>
<ul className="todo-list">
       {todos.map((todo) => (
<li key={todo.id}>
<input type="checkbox" />
<span>{todo.todo}</span>
<button onClick={() => deleteTodo(todo.id)}>Delete</button>
</li>
       ))}
</ul>
</div>
 );
};
export default ToDoManager;