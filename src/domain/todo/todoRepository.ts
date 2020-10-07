import { Todo } from "./todo";

export interface TodoRepository {
  save(todo: Todo): void;
}
