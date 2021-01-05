import { Fab, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import '../styles/components/add-todo.scss';

type AddTodoProps = {
  onAdd(text: string): void;
};

function AddToDo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form className='add-todo' onSubmit={onSubmit}>
      <TextField
        id='outlined-basic'
        variant='standard'
        fullWidth
        onChange={onChange}
        value={text}
      />
      <div className='add-todo__fab'>
        <Fab size='small' color='primary' aria-label='add' type='submit'>
          <AddIcon />
        </Fab>
      </div>
    </form>
  );
}

export default AddToDo;
