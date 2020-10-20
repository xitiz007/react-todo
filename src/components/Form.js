import React from 'react';

const Form = (props) => {

    const inputTextHandler = (event) => 
    {
        const inputText = event.target.value;
        props.setTodoTitle(inputText);
    }

    const submitHandler = (event) =>
    {
        event.preventDefault();
        const todoObject = {
            title : props.todoTitle,
            completed : false,
            id : new Date().getTime().toString()
        }
        props.setTodos([todoObject, ...props.todos]);
        props.setTodoTitle('');
    }

    const statusHandler = (event) =>
    {
        props.setStatus(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" className="todo-input" onChange={inputTextHandler} value={props.todoTitle}/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;