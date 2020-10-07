import { TodoRepository } from "../domain/todo/todoRepository";
import { Todo } from "../domain/todo/todo";

export class TodoUseCase {
  private _todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this._todoRepository = todoRepository;
  }

  public create(title: string): void {
    let todo = new Todo(title);
    this._todoRepository.save(todo);
  }
}
