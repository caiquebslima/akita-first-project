import { createTodo, VISIBILITY_FILTER } from './todo.model';
import { todosStore } from './todos.store';

export function updateTodosFilter(filter: VISIBILITY_FILTER) {
  todosStore.update({
    ui: {
      filter,
    },
  });
}

export function toggleTodo(id: string) {
  todosStore.update(id, (entity) => ({ completed: !entity.completed }));
}

export function addTodo(text: string) {
  const todo = createTodo(text);
  todosStore.add(todo);
}

export function selectTodo(id: string) {
  todosStore.setActive(id);
}

export function editTodo(newText: string) {
  todosStore.updateActive({ text: newText });
}

export function deleteTodo(id: string) {
  todosStore.remove(id);
}
