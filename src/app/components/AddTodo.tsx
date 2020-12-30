import { Fab } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

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
    <form onSubmit={onSubmit}>
      <input
        type='text'
        className='input-text'
        value={text}
        onChange={onChange}
      />
      <Fab size='small' color='primary' aria-label='add' type='submit'>
        <AddIcon />
      </Fab>
    </form>
  );
}

export default AddToDo;
