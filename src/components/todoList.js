import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo ,deleteTodo } from "../redux/slices";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch ();
    

    const handleToggle = (id) => {
        dispatch(toggleTodo({id}));
    };
       
    const handleDelete =(id) => {
        dispatch(deleteTodo({id}));
    };

    return(
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className="todo-item">
                    <span className={`todo-text ${todo.completed ? 'completed' : ''}`} onClick={() => handleToggle(todo.id)}>
                        {todo.text}
                    </span>
                    <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>
            ))}   
        </ul>
    );
};
export default TodoList;