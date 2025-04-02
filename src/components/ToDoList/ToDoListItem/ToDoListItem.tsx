import { useState } from "react";
import { ToDo } from "../../../models/todo-item";
import {
  ToDoItem,
  ToDoItemControl,
  ToDoItemControls,
  ToDoItemText,
} from "./ToDoListItem.styled";
import checkIcon from "../../../assets/images/check.png";
import uncheckIcon from "../../../assets/images/uncheck.png";
import trashIcon from "../../../assets/images/trash.png";
import penIcon from "../../../assets/images/penIcon.png";
import saveIcon from "../../../assets/images/save.png";

export const ToDoListItem = (props: {
  toDoItem: ToDo;
  changeToDo?: (updatedToDo: ToDo) => void;
  updateToDo: (todo: ToDo) => void;
  deleteToDo: (todo: ToDo) => void;
}) => {
  const { toDoItem, changeToDo, updateToDo, deleteToDo } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [localText, setLocalText] = useState(toDoItem.text.toString());

  const handleEditClick = () => {
    setIsEditing(true);
    setLocalText(toDoItem.text.toString());
  };

  const handleSaveClick = () => {
    if (localText.trim() === "") {
      alert("Задача не может быть пустой!");
      return;
    }
    if (changeToDo) {
      changeToDo({ ...toDoItem, text: localText });
    }
    setIsEditing(false);
  };

  return (
    <ToDoItem>
      {isEditing ? (
        <input
          type="text"
          value={localText}
          onChange={(e) => setLocalText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSaveClick();
            }
          }}
          autoFocus
        />
      ) : (
        <ToDoItemText>{toDoItem.text}</ToDoItemText>
      )}
      <ToDoItemControls>
        {!toDoItem.isDone &&
          changeToDo &&
          (isEditing ? (
            <ToDoItemControl $icon={saveIcon} onClick={handleSaveClick} />
          ) : (
            <ToDoItemControl $icon={penIcon} onClick={handleEditClick} />
          ))}
        <ToDoItemControl
          $icon={trashIcon}
          onClick={() => deleteToDo(toDoItem)}
        />
        <ToDoItemControl
          $icon={toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => updateToDo(toDoItem)}
        />
      </ToDoItemControls>
    </ToDoItem>
  );
};
