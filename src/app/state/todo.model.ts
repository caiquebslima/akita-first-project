import { guid } from '@datorama/akita';

export interface TodoModel {
  id: string;
  text: string;
  completed: boolean;
}

export function createTodo(text: string): TodoModel {
  return {
    id: guid(),
    text,
    completed: false,
  };
}

export enum VISIBILITY_FILTER {
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_ALL = 'SHOW_ALL',
}
