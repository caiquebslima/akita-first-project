import React from 'react';
import { TodoModel } from '../state/todo.model';
import * as todosService from '../state/todos.service';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import '../styles/components/todo.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

interface TodoProps extends TodoModel {
  onClick: (id: TodoModel['id']) => void;
  onDelete: (id: TodoModel['id']) => void;
}

function ToDo({ onClick, onDelete, ...todo }: TodoProps) {
  const [active, setActive] = React.useState('unactive');
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
          onFocus={() => setActive('active')}
          onBlur={() => {
            setTimeout(function () {
              setActive('unactive');
            }, 100);
          }}
          value={value}
        />
        <div className='Todo__item--buttons'>
          <div className={`edit-buttons ${active}`}>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => {
                setValue(todo.text);
                setActive('unactive');
              }}
              size='small'
            >
              Undo
            </Button>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              size='small'
              onClick={() => setActive('unactive')}
            >
              Save
            </Button>
          </div>

          <div className='save-buttons'>
            <Button
              variant='contained'
              size='small'
              color='secondary'
              onClick={() => onDelete(todo.id)}
            >
              <DeleteIcon />
            </Button>
            <Button
              variant='contained'
              color='primary'
              size='small'
              onClick={() => !todo.completed}
            >
              <DoneIcon />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToDo;
