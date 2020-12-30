import React from 'react';
import { TodoModel } from '../state/todo.model';
import * as todosService from '../state/todos.service';

interface TodoProps extends TodoModel {
  onClick: (id: TodoModel['id']) => void;
  onDelete: (id: TodoModel['id']) => void;
}

function ToDo({ onClick, onDelete, ...todo }: TodoProps) {
  const [isEditing, setEditing] = React.useState(false);
  const [value, setValue] = React.useState(todo.text);

  return (
    <div>
      {isEditing ? (
        <form
          onSubmit={() => {
            todosService.editTodo(value);
            setEditing(false);
          }}
        >
          <input
            type='text'
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <button type='submit'>Save</button>
          <button
            onClick={() => {
              setEditing(false);
              setValue(todo.text);
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <li key={todo.id} onClick={() => onClick(todo.id)}>
          <button
            onClick={() => {
              setEditing(true);
              todosService.selectTodo(todo.id);
            }}
          >
            ✎
          </button>
          {todo.text}
          <button onClick={() => !todo.completed}>✓</button>

          <button aria-label='delete' onClick={() => onDelete(todo.id)}>
            ✕
          </button>
        </li>
      )}
    </div>
  );
}

export default ToDo;
