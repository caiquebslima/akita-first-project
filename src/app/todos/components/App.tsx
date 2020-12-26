import React from 'react';
import styled from 'styled-components';
import AddTodo from './AddTodo';
import Todo from './Todo';
import Filters from './Filters';
import * as todosService from '../state/todos.service';
import { useObservable } from '@libreact/use-observable';
import { selectVisibleTodos$ } from '../state/todos.query';
import List from '@material-ui/core/List';
import { TodoModel } from '../state';

function App() {
  const listStyle = {
    width: '100%',
    maxWidth: 360,
    flex: '1 1 auto',
  };
  const [todos] = useObservable<TodoModel[], any>(selectVisibleTodos$);
  return (
    <Container>
      <AddTodo onAdd={todosService.addTodo} />
      <List style={listStyle}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={todosService.toggleTodo}
            onDelete={todosService.deleteTodo}
          />
        ))}
      </List>
      <Filters onChange={todosService.updateTodosFilter} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export default App;
