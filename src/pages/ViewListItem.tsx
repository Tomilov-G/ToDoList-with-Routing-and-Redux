import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToDo } from "../models/todo-item";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ViewListItem = () => {
  const toDoList = useSelector((state: RootState) => state.toDoList.todos);

  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>()

  useEffect(() => {
    const searchToDo = toDoList.find((todo) => String(todo.id) === id);

    if (searchToDo) {
      setTodo(searchToDo);
    } else {
      navigate("/404");
    }
  }, [toDoList, id, navigate]);
  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  );
};
