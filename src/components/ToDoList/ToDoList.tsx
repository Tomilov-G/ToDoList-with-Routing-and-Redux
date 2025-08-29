import React, { useMemo } from "react";
import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDo } from "../../models/todo-item";
import { ToDoListBlock, ToDoListContainer } from "./ToDoList.style";
import { clearCompleted } from "../../feature/toDoList";
import { useDispatch } from "react-redux";

type Props = {
  todos: ToDo[];
  updateToDo: (todo: ToDo) => void;
  deleteToDo: (todo: ToDo) => void;
  changeToDo: (todo: ToDo) => void;
};

export const ToDoList: React.FC<Props> = ({
  todos,
  updateToDo,
  deleteToDo,
  changeToDo,
}) => {
  const remainingCount = useMemo(
    () => todos.filter((item) => !item.isDone).length,
    [todos]
  );
  const completedCount = useMemo(
    () => todos.filter((item) => item.isDone).length,
    [todos]
  );
  const dispatch = useDispatch();

  return (
    <ToDoListContainer>
      <h4 className="title">Невыполненные задачи</h4>
      <div>Количество оставшихся задач: {remainingCount}</div>
      <ToDoListBlock status={"failed"}>
        {todos
          .filter((item) => !item.isDone)
          .map((item) => (
            <ToDoListItem
              key={item.id}
              toDoItem={item}
              changeToDo={changeToDo}
              updateToDo={updateToDo}
              deleteToDo={deleteToDo}
            />
          ))}
      </ToDoListBlock>

      <h4 className="title doneTask">Выполненные задачи</h4>
      <div className="doneList">
        <p className="counterOfDoneTask">
          Количество выполненных задач: {completedCount}
        </p>
        <button onClick={() => dispatch(clearCompleted())} className="clearDoneTask">
          Очистить
        </button>
      </div>
      <ToDoListBlock status={"completed"}>
        {todos
          .filter((item) => item.isDone)
          .map((item) => (
            <ToDoListItem
              key={item.id}
              toDoItem={item}
              updateToDo={updateToDo}
              deleteToDo={deleteToDo}
            />
          ))}
      </ToDoListBlock>
    </ToDoListContainer>
  );
};
