import { createEntityQuery } from '@datorama/akita';

import { TodosState, todosStore } from './todos.store';
import { TodoModel } from './todo.model';
import { combineLatest } from 'rxjs';

export const todosQuery = createEntityQuery<TodosState>(todosStore);

export const selectVisibilityFilter$ = todosQuery.select(
  (state) => state.ui.filter
);

export const selectVisibleTodos$ = combineLatest(
  selectVisibilityFilter$,
  todosQuery.selectAll(),
  function getVisibleTodos(filter, todos): TodoModel[] {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter((t) => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter((t) => !t.completed);
      default:
        return todos;
    }
  }
);
