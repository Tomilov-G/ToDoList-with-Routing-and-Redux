import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ToDo } from "../models/todo-item";

interface ComponentProps {
  todos: ToDo[];
}

export const ItemDescription = ({todos}: ComponentProps) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setToDo] = useState<ToDo>()

    useEffect(() => {
        const searchToDo = todos.find((todo) => String(todo.id) === id)

        if (searchToDo) {
            setToDo(searchToDo)
        } else {
            navigate('/404')
        }
    }, [todos, id, navigate])
  return (
      <div className="container">
        <h1>{todo?.text}</h1>
      </div>
  );
};
