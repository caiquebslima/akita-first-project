import React, { useState } from 'react';

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
      <button type='submit' className='submit-button'>
        Add
      </button>
    </form>
  );
}

export default AddToDo;
