import reducer, {
  createAction,
  updateAction,
  deleteAction,
  clearCompleted,
  editAction,
} from "./toDoList";
import type { ToDo } from "../models/todo-item";

describe("toDoSlice reducers (unit)", () => {
  const initialState = { todos: [] as ToDo[] };

  it("createAction добавляет задачу", () => {
    const state = reducer(initialState, createAction("test task"));
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0].text).toBe("test task");
    expect(state.todos[0].isDone).toBe(false);
    expect(typeof state.todos[0].id).toBe("string");
  });

  it("updateAction переключает isDone (toggle)", () => {
    const todo: ToDo = { id: "1", text: "t", isDone: false };
    const stateWith = { todos: [todo] };
    const after = reducer(stateWith, updateAction({ ...todo }));
    expect(after.todos[0].isDone).toBe(true);
    const after2 = reducer(after, updateAction({ ...todo }));
    expect(after2.todos[0].isDone).toBe(false);
  });

  it("deleteAction удаляет задачу", () => {
    const t1: ToDo = { id: "1", text: "a", isDone: false };
    const t2: ToDo = { id: "2", text: "b", isDone: true };
    const state = reducer({ todos: [t1, t2] }, deleteAction(t1));
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0].id).toBe("2");
  });

  it("clearCompleted удаляет все выполненные", () => {
    const t1: ToDo = { id: "1", text: "a", isDone: true };
    const t2: ToDo = { id: "2", text: "b", isDone: false };
    const state = reducer({ todos: [t1, t2] }, clearCompleted());
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0].id).toBe("2");
  });

  it("editAction редактирует текст", () => {
    const t1: ToDo = { id: "1", text: "a", isDone: false };
    const state = reducer(
      { todos: [t1] },
      editAction({ id: "1", newText: "new" })
    );
    expect(state.todos[0].text).toBe("new");
  });
});
