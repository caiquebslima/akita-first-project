import { ActiveState, createEntityStore, EntityState } from '@datorama/akita';
import { TodoModel, VISIBILITY_FILTER } from './todo.model';

export interface TodosState
  extends EntityState<TodoModel, string>,
    ActiveState {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}

const initialState = {
  ui: { filter: VISIBILITY_FILTER.SHOW_ALL },
};

export const todosStore = createEntityStore<TodosState>(initialState, {
  name: 'todos',
});
