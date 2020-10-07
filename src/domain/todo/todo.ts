import { TodoStatus } from "./todoStatus";
import { ulid } from "ulid";

export class Todo {
  private _todoId: string;
  private _title: string;
  private _status: TodoStatus;

  get todoId(): string {
    return this._todoId;
  }
  get title(): string {
    return this._title;
  }
  get status(): TodoStatus {
    return this._status;
  }

  constructor(title: string) {
    this._todoId = ulid();
    this._title = title;
    this._status = TodoStatus.Todo;
  }
}
