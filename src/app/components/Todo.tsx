import React from 'react';
import { TodoModel } from '../state/todo.model';
import * as todosService from '../state/todos.service';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import '../styles/todo.scss';

interface TodoProps extends TodoModel {
  onClick: (id: TodoModel['id']) => void;
  onDelete: (id: TodoModel['id']) => void;
}

function ToDo({ onClick, onDelete, ...todo }: TodoProps) {
  const [editing, setEditing] = React.useState(false);
  const [value, setValue] = React.useState(todo.text);

  return (
    <div className='Todo'>
      <form
        className='Todo__item'
        onSubmit={(e) => {
          e.preventDefault();
          todosService.editTodo(value);
        }}
      >
        <TextField
          id='outlined-basic'
          variant='outlined'
          fullWidth
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onFocus={() => setEditing(true)}
          onBlur={() => setEditing(false)}
          value={value}
        />
        {editing ? (
          <div className='Todo__item--action-buttons'>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => {
                setValue(todo.text);
                setEditing(false);
              }}
            >
              Undo
            </Button>
            <Button variant='contained' color='primary' type='submit'>
              Save
            </Button>
          </div>
        ) : (
          ''
        )}

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
      </form>
    </div>
  );
}

export default ToDo;
