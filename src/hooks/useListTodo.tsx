import { useContext } from "react"
import { TodoContext } from "../context/TodoProvider"

export const useListTodo = () => {
   const { listTodo, setListTodo } = useContext(TodoContext)
   
   return { listTodo, setListTodo };
}