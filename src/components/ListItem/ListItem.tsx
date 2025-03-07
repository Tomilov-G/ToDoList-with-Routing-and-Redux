import { ToDo } from "../../models/todo-item";
import { ListItemLink } from "./ListItem.style";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <ListItemLink
      to={`/list/${todo.id}`}
      $done={todo.isDone}
    >
      {todo.text}
    </ListItemLink>
  );
};
