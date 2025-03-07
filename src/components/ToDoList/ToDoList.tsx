import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDo } from "../../models/todo-item";
import { ToDoListBlock, ToDoListContainer } from "./ToDoList.style";

export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: (props: ToDo) => void;
  deleteToDo: (props: ToDo) => void;
}) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            key={item.id}
            toDoItem={item}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };
  const uncheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            key={item.id}
            toDoItem={item}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };
  return (
    <ToDoListContainer>
      <ToDoListBlock status={"failed"}>{checkedList()}</ToDoListBlock>
      <ToDoListBlock status={"completed"}>{uncheckedList()}</ToDoListBlock>
    </ToDoListContainer>
  );
};
