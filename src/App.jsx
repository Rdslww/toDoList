import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './index.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);



function setTodosId() {
  const todoId = uuid();
  setTodos([...todos, { id: todoId, todo, completed: false}]);
  setTodo('');

}

function eventTargetValue(event) {
  setTodo(event.target.value)
}

function submitEvent(event) {
  event.preventDefault();
  setTodosId();
  setTodo('');
}

function editItemId(id) {
  const editedTodo = todos.find((newTodo) => newTodo.id === id);
  setTodo(editedTodo.todo);
  const updatedTodo = todos.filter((newTodo) => newTodo.id !== id);
  setTodos(updatedTodo);
}



function deleteItemId(id) {
  setTodos(todos.filter(x => x.id !== id));
}

  return (
    <>
    <div>
      <form className='form' onSubmit={submitEvent}>
        <label htmlFor='todo'>
          То Do List
        </label>
        <div>
        <input
        type='text'
        id='todo'
        value={todo}
        onChange={eventTargetValue}
        className="input-field" 
        >
        </input>
        </div>
        <div>
        <button type='submit'>
          Submit
        </button>
        </div>
      </form>

      <h2 className='h2'>
        All To Do Items
        </h2>
      <ol className='ol'>
        {todos.map((newTodo, index) => (
          <li key={index}>
            <div>             
            <span>{newTodo.todo}</span>
            <button className='edit-button' onClick={() => editItemId(newTodo.id)}>
              Edit
            </button>

            <button className="delete-button" onClick={() => deleteItemId(newTodo.id)}>
            Delete
            </button>
            </div>
          </li>
        )
        )}

      </ol>
    </div>
    </>
  )
}

export default App;