import { useEffect, useState } from 'react';
import { todoContext } from './context';

import './App.css'
import ToDoList from './components/ToDoList'
import axios from 'axios';


function App() {

  const [todos, setTodos] = useState([]);
  const [text,setText] = useState('')
  const [error,setError] = useState('')
  const [currentFilter, setCurrentFilter] = useState('all')
  
  const addTodo = newTodo => {
    setTodos([...todos, newTodo])
  }
  
  const deleteTodos = id => {
    axios
    .delete("http://localhost:3004/todos/" + id)
    .then(res => {
      setTodos(todos.filter(todo => todo.id !== res.data.id));
    })
  }

  const updateStatus = (id, status) => {
    console.log("Updating todo with ID:", id, "to status:", status);
    axios
    .patch("http://localhost:3004/todos/" + id, {status})
    .then(res => {
      setTodos(todos.map(todo => todo.id === res.data.id ? res.data : todo))
    })
    .catch(error => {
      console.error("There was an error updating the todo!", error);
    });
  }
  
  useEffect(() =>{
    axios
    .get("http://localhost:3004/todos")
    .then(res => {
      setTodos(res.data)
    })
  },[])
  
  
  return (
    <todoContext.Provider value={{
      todos,
      text,
      setText,
      error,
      setError,
      addTodo,
      onDelete:deleteTodos,
      onUpdateStatus: updateStatus,
      currentFilter,
      setCurrentFilter
    }}>
    <ToDoList />
    </todoContext.Provider>
  )
}

export default App
