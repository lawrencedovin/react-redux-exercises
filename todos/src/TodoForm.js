import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import TodoInput from "./TodoInput";

const TodoForm = ({addTodo}) => {

    const INITIAL_STATE = {
        todoText: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    return (
        <>
            <h1>Make a Todo!</h1>
            <form onSubmit={handleSubmit}>
                <TodoInput name="todoText" value={formData.todoText} type='text' handleChange={handleChange}/>
                <button type="submit">Generate Todo!</button>
            </form>
        </>
    );
}

export default TodoForm;