import React from 'react';
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
    <div>
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
    </div>
  );
}

export default App;
