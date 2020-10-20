import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');

  useEffect(() => {
    const _todos = localStorage.getItem('todos');
    let todosArray;
    if (_todos)
    {
      todosArray = JSON.parse(_todos);
    }
    else
    {
      todosArray = [];
    }
    setTodos(todosArray);
  }, []);

  useEffect(() => {
    const todosToString = JSON.stringify(todos);
    localStorage.setItem('todos', todosToString);
  }, [todos]);

  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>
      <Form 
        setTodoTitle={setTodoTitle} 
        todoTitle={todoTitle}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}/>
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        status={status}/>
    </div>
  );
}

export default App;
