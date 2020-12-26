import React from 'react';
import { TodoModel } from '../state/todo.model';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

interface TodoProps extends TodoModel {
  onClick: (id: TodoModel['id']) => void;
  onDelete: (id: TodoModel['id']) => void;
}

function ToDo({ onClick, onDelete, ...todo }: TodoProps) {
  return (
    <ListItem
      key={todo.id}
      role={undefined}
      dense
      button
      onClick={() => onClick(todo.id)}
    >
      <Checkbox
        edge='start'
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
        inputProps={{ 'aria-labelledby': todo.text }}
      />
      <ListItemText
        primary={todo.text}
        style={{ color: todo.completed ? 'grey' : 'black' }}
      />
      <IconButton
        edge='end'
        aria-label='delete'
        onClick={() => onDelete(todo.id)}
      >
        <Delete />
      </IconButton>
    </ListItem>
  );
}

export default ToDo;
