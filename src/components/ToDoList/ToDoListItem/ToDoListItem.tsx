import { ToDo } from "../../../models/todo-item";
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from "./ToDoListItrm.styled";
import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'

export const ToDoListItem = (props: {
  toDoItem: ToDo;
  updateToDo: (props: ToDo) => void;
  deleteToDo: (props: ToDo) => void;
}) => {
  return (
    <ToDoItem>
      <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
      <ToDoItemControls>
        <ToDoItemControl
          $icon={trashIcon}
          onClick={() => props.deleteToDo(props.toDoItem)}
        ></ToDoItemControl>
        <ToDoItemControl
          $icon = {props.toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => props.updateToDo(props.toDoItem)}
        ></ToDoItemControl>
      </ToDoItemControls>
    </ToDoItem>
  );
};
