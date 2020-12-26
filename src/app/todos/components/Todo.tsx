import React from 'react';
import { TodoModel } from '../state/todo.model';

interface TodoProps extends TodoModel {
  onClick: (id: TodoModel['id']) => void;
  onDelete: (id: TodoModel['id']) => void;
}

function ToDo({ onClick, onDelete, ...todo }: TodoProps) {
  return (
    <li key={todo.id} onClick={() => onClick(todo.id)}>
      {todo.text}
      <button onClick={() => !todo.completed}></button>

      <button aria-label='delete' onClick={() => onDelete(todo.id)}></button>
    </li>
  );
}

export default ToDo;
