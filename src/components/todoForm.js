import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices';

const TodoForm = () => {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputText!==''){
            dispatch(addTodo(inputText));
            setInputText('');
        }
    };
  return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Enter New Task' 
            className='todo-input'/>
            <button type='submit' className='todo-button'>Add Todo</button>
        </form>
  );
};
export default TodoForm;

