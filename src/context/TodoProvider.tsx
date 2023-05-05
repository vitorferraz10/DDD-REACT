import { ReactNode, createContext, useState } from "react";

type TodoContextProps = { listTodo?: string[], setListTodo: (listTodo?: string[]) => void };

type ContextProps = {
  children: ReactNode;
};

export const TodoContext = createContext({} as TodoContextProps);

export function TodoProvider({ children }: ContextProps) {
  const [listTodo, setListTodo] = useState<string[]>();

  return (
     <TodoContext.Provider value={{ listTodo, setListTodo }}>
        
      {children}
    </TodoContext.Provider>
  );
}
