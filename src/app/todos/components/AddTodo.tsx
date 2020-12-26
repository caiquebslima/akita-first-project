import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
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
      <TextField
        id='standard-basic'
        label='Todo: ...'
        value={text}
        onChange={onChange}
      />
      <IconButton type='submit' color='primary' aria-label='add a todo item'>
        <AddIcon />
      </IconButton>
    </form>
  );
}

export default AddToDo;
