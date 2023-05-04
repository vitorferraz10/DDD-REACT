import { useRef, useState } from "react";
import Button from "./components/Button";
import { TextField } from "./components/TextField";
import { useListTodo } from "../../hooks/useListTodo";

export const Form = () => {
   const [valueInput, setValueInput] = useState('')
   const inputRef = useRef<HTMLInputElement>(null)
   const { listTodo, setListTodo } = useListTodo();

   function handleChangeTextField(value: string) {
      setValueInput(value)
   }


   function handleSubmitForm(e: {preventDefault: () => void}) {
     e.preventDefault();
     
      setListTodo([...(listTodo || []), valueInput]);
      setValueInput("");
      inputRef.current?.focus()

   }

  return (
    <form onSubmit={(e) => handleSubmitForm(e)}>
      <TextField
        onChange={(e) => handleChangeTextField(e.target.value)}
        placeholder="Write your task"
        inputRef={inputRef} 
        value={valueInput}
      />
      <Button
        textContent="Add"
        disabled={!valueInput}
      />
    </form>
  );
};
