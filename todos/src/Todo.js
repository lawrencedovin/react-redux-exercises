import './Todo.css';

const Todo = ({id, todoText, handleRemove}) => {

    const remove = () => handleRemove(id);

    return(
        <>
            <li key={id} className="Todo" id={id}>
                {todoText}
            </li>
            <button onClick={remove}>Remove</button>
        </>
    );
};

export default Todo;