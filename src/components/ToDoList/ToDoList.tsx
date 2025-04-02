import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDo } from "../../models/todo-item";
import { ToDoListBlock, ToDoListContainer } from "./ToDoList.style";

export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: (todo: ToDo) => void;
  deleteToDo: (todo: ToDo) => void;
  changeToDo: (todo: ToDo) => void;
}) => {
  const notDoneList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item) => (
        <ToDoListItem
          key={item.id}
          toDoItem={item}
          changeToDo={props.changeToDo}
          updateToDo={props.updateToDo}
          deleteToDo={props.deleteToDo}
        />
      ));
  };

  const doneList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item) => (
        <ToDoListItem
          key={item.id}
          toDoItem={item}
          updateToDo={props.updateToDo}
          deleteToDo={props.deleteToDo}
        />
      ));
  };

  return (
    <ToDoListContainer>
      <ToDoListBlock status={"failed"}>{notDoneList()}</ToDoListBlock>
      <ToDoListBlock status={"completed"}>{doneList()}</ToDoListBlock>
    </ToDoListContainer>
  );
};
