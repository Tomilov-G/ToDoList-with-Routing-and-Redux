import { ListItem } from "../components/ListItem/ListItem";
import { ToDo } from "../models/todo-item";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ViewList = () => {
  const toDoList = useSelector((state: RootState) => state.toDoList.todos);
  return (
    <div className="container">
      {toDoList.map((todo: ToDo) => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
