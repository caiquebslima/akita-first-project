import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import Filters from './Filters';
import * as todosService from '../state/todos.service';
import { useObservable } from '@libreact/use-observable';
import { selectVisibleTodos$ } from '../state/todos.query';
import { TodoModel } from '../state';
import { akitaDevtools } from '@datorama/akita';
import { useDrag } from 'react-use-gesture';
import '../styles/app.scss';

function App() {
  akitaDevtools();

  const [todos] = useObservable<TodoModel[], any>(selectVisibleTodos$);

  const bind = useDrag(({ swipe, last, tap }) => {
    if (!!last && !tap) {
      console.log(swipe);
    }
  });

  return (
    <div className='container' {...bind()}>
      <AddTodo onAdd={todosService.addTodo} />
      <button
        onClick={() => {
          todosService.addTodo('Passear com os cachorros');
          todosService.addTodo('Lavar o quintal');
          todosService.addTodo('Fazer compras no mercado');
          todosService.addTodo('Consertar o telhado');
        }}
      >
        Populate list
      </button>
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
