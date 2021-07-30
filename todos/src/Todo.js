import './Todo.css';
import PropTypes from "prop-types";

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

Todo.propTypes = {
    todoText: PropTypes.string.isRequired
};

export default Todo;