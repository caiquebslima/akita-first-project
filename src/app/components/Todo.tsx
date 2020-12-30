import React from 'react';
import { TodoModel } from '../state/todo.model';
import * as todosService from '../state/todos.service';
import Button from '@material-ui/core/Button';
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

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
          <Button variant='contained' color='primary' type='submit'>
            Save
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => {
              setEditing(false);
              setValue(todo.text);
            }}
          >
            Cancel
          </Button>
        </form>
      ) : (
        <li key={todo.id} onClick={() => onClick(todo.id)}>
          <Fab color='primary' size='small' aria-label='edit'>
            <EditIcon />
          </Fab>
          {todo.text}
          {todo.completed ? (
            <Button
              variant='contained'
              color='primary'
              size='small'
              onClick={() => !todo.completed}
            >
              ✓
            </Button>
          ) : (
            <Button
              variant='outlined'
              color='primary'
              size='small'
              onClick={() => !todo.completed}
            >
              ✓
            </Button>
          )}

          <Button
            variant='contained'
            size='small'
            color='secondary'
            onClick={() => onDelete(todo.id)}
          >
            ✕
          </Button>
        </li>
      )}
    </div>
  );
}

export default ToDo;
