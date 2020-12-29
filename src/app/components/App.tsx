import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import Filters from './Filters';
import * as todosService from '../state/todos.service';
import { useObservable } from '@libreact/use-observable';
import { selectVisibleTodos$ } from '../state/todos.query';
import { TodoModel } from '../state';
import { akitaDevtools } from '@datorama/akita';
import { animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

function App() {
  akitaDevtools();
  const [todos] = useObservable<TodoModel[], any>(selectVisibleTodos$);
  // const localObjects: any = localStorage.getItem('Todo List');
  // const parsedLocalObjects = [JSON.parse(localObjects)];
  // parsedLocalObjects.map((localObject) => todosStore.add(localObject));

  const saveToLocalStorage = () => {
    console.log('saved to local storage');
  };

  // const [position, setPosition] = React.useState(0);
  // const { x } = useSpring({ x: position * 200 })
  const bind = useDrag(({ swipe, last, tap }) => {
    if (!!last && !tap) {
      console.log(swipe);
    }
    // position will either be -1, 0 or 1
    // setPosition((p) => Math.min(Math.max(-1, p + swipeX), 1));
    // console.log(position);
    // if (position > 0) {
    //   saveToLocalStorage();
    //   alert('saved to local storage');
    // }
    // return;
  });

  return (
    <div style={{ backgroundColor: 'blue' }} {...bind()}>
      <animated.div>
        <AddTodo onAdd={todosService.addTodo} />
        <button
          onClick={() => {
            saveToLocalStorage();
            // localStorage.setItem('Todo List', JSON.stringify(todos));
          }}
        >
          Save to Local Storage
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
      </animated.div>
    </div>
  );
}

export default App;
