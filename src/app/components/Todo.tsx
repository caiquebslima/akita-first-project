import React from 'react';
import { TodoModel } from '../state/todo.model';
import * as todosService from '../state/todos.service';

interface TodoProps extends TodoModel {
  // onEdit: (id: TodoModel['id'], newText: TodoModel['text']) => void;
  onClick: (id: TodoModel['id']) => void;
  onDelete: (id: TodoModel['id']) => void;
}

function ToDo({ onClick, onDelete, ...todo }: TodoProps) {
  const [isEditing, setEditing] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setEditing(true);
          todosService.selectTodo(todo.id);
        }}
      >
        Edit
      </button>
      {isEditing ? (
        <div>
          <input
            type='text'
            value={todo.text}
            onChange={(e) => todosService.editTodo(e.target.value)}
          />
          <button
            onClick={() => {
              setEditing(false);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <li key={todo.id} onClick={() => onClick(todo.id)}>
          {todo.text}
          <button onClick={() => !todo.completed}>Complete</button>

          <button aria-label='delete' onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </li>
      )}
    </div>
  );
}

export default ToDo;
