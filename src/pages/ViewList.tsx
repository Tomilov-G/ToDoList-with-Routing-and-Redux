import { ListItem } from "../components/ListItem/ListItem";
import { ToDo } from "../models/todo-item";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ViewList = () => {
  const toDoList = useSelector((state: RootState) => state.toDoList.todos);
  return (
    <>
      <h3 className="title">Общий список задач</h3>
      <div className="container">
        {toDoList.map((todo: ToDo) => (
          <ListItem todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
};
