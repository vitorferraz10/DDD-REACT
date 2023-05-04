import { Form } from "../../components/Form";
import { ListTodo } from "../../components/ListTodo";
import { useListTodo } from "../../hooks/useListTodo";

export const Todo = () => {
  const { listTodo } = useListTodo();
  
  return (
    <>
      <Form />
    { listTodo &&  <ListTodo list={listTodo} />}
    </>
  );
};
