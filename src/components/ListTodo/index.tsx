export type ListTodoProps = {
  list?: string[];
};

export const ListTodo = ({ list }: ListTodoProps) => {
  return (
    <ul>
      {list?.map((res) => (
        <li>{res}</li>
      ))}
    </ul>
  );
};
