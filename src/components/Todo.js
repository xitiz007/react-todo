import React from 'react';

const Todo = (props) => 
{
    const onDeleteHandler = (id) => 
    {
        const updatedTodos = props.todos.filter(todo => todo.id !== id);
        props.setTodos(updatedTodos);
    }

    const onCompletedHandler = (id) =>
    {
        const updatedTodos = props.todos.map(todo => {
            if (todo.id === id)
            {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        props.setTodos(updatedTodos);
    }

    return (
        <div className="todo">
            <li className={`todo-item ${props.completed && "completed"}`}>
                {props.title}
            </li>
            <button className="complete-btn" onClick={() => {onCompletedHandler(props.id)}}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => {onDeleteHandler(props.id)}}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;