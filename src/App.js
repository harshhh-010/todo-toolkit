import './App.css';
import React from 'react';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
      
    </div>
  );
}

export default App;
