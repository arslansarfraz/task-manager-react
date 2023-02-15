import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Todos from './components/Todos';
import './App.css';

function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodo, setFilteredTodo] = useState([])

  useEffect(() => {
    getItemtoLocal()
  }, [])

  useEffect(() => {
    filteredHandler()
    saveItemtoLocal()
  }, [status, todos])

  const filteredHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodo(todos.filter((todo) => todo.iscompleted === true));
        break;
      case 'uncompleted':
        setFilteredTodo(todos.filter((todo) => todo.iscompleted === false));
        break;

      default: setFilteredTodo(todos)
        break;
    }
  }
  // Save item into localStorage
  const saveItemtoLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getItemtoLocal = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      const savedTodos = JSON.parse(localStorage.getItem('todos'));
      if (savedTodos && savedTodos.length > 0) {
        setTodos(savedTodos);
      }
    }
  }
  const heading = React.createElement('h1', { className: 'Hello' }, 'GitMit Todo List')
  return (
    <div className="App">
      <header>
        {heading}
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} />
      <Todos todos={todos} setTodos={setTodos} filteredTodo={filteredTodo} />
    </div>
  );
}

export default App;
