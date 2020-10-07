import { Todo } from "../../../src/domain/todo/todo";
import { TodoStatus } from "../../../src/domain/todo/todoStatus";

describe("constructor_Test", () => {
  test("success", () => {
    const title = "作成するTODOのタイトル";
    const todo = new Todo(title);

    expect(todo.title).toEqual(title);
    expect(todo.status).toEqual(TodoStatus.Todo);
  });
});
