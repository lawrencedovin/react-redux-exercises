import TodoForm from './TodoForm';
import Todo from './Todo';
import {useDispatch, useSelector} from 'react-redux';

const TodoGenerator = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  
    const addTodo = (newTodo) => {
      dispatch({type: 'ADD_TODO', todo: newTodo});
    }
  
    const deleteTodo = (id) => {
      dispatch({type: 'REMOVE_MEME', id});
    }
  
    const todoComponents = todos.map(todo => (
      <Todo 
          key={todo.id}
          id={todo.id} 
          todoText={todo.todoText} 
          handleRemove={() => deleteTodo(todo.id)}
      />
  ));

  return(
      <>
        <TodoForm addTodo={addTodo} />
        {todoComponents}
      </>
  );
  

}

export default TodoGenerator;