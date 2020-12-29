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
                // todosService.editTodo(todoText);
                setEditing(false);
                setValue(todo.text);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <li key={todo.id} onClick={() => onClick(todo.id)}>
          {todo.text}
          <button onClick={() => !todo.completed}>Complete</button>

          <button
            aria-label='delete'
            onClick={() => {
              const localObjects: any = localStorage.getItem('Todo List');
              const parsedLocalObjects = [JSON.parse(localObjects)];
              const filteredObjs = parsedLocalObjects.filter(
                (obj) => obj.id === todo.id
              );
              onDelete(todo.id);
            }}
          >
            Delete
          </button>
        </li>
      )}
    </div>
  );
}

export default ToDo;
