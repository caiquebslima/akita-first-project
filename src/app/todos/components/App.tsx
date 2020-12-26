import React from 'react';
import styled from 'styled-components';
import AddTodo from './AddTodo';
import Todo from './Todo';
import Filters from './Filters';
import * as todosService from '../state/todos.service';
import { useObservable } from '@libreact/use-observable';
import { selectVisibleTodos$ } from '../state/todos.query';
import { TodoModel } from '../state';

function App() {
  const [todos] = useObservable<TodoModel[], any>(selectVisibleTodos$);
  return (
    <Container>
      <AddTodo onAdd={todosService.addTodo} />
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={todosService.toggleTodo}
            onDelete={todosService.deleteTodo}
          />
        ))}
      </ul>
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
