import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

  const getTodos = () =>
  {
    let todos;
    if (props.status === "all")
    {
      todos = props.todos;
    }
    else if(props.status  === "completed") 
    {
      todos = props.todos.filter(todo => todo.completed == true );
    }
    else
    {
      todos = props.todos.filter(todo => todo.completed !== true);
    }

    return todos.map(todo => (
      <Todo 
        key={todo.id}
        {...todo} 
        setTodos={props.setTodos}
        todos={props.todos}/>
    ));
  }

    return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          getTodos()
        }
      </ul>
    </div>
    );
}

export default TodoList;