import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Form } from ".";
import { useListTodo } from "../../hooks/useListTodo";

vi.mock("../../hooks/useListTodo", () => {
   return {
      useListTodo: vi.fn()
   }
});

describe("<Form />", () => {
   const placeholderMock = "Write your task";
   
   beforeEach(() => {
      (useListTodo as jest.Mock).mockReturnValue({listTodo: ['My first task'], setListTodo: vi.fn()})
   })
   
  it("should input have correct placeholder and button disabled", () => {
   
     const { getByPlaceholderText, getByRole } = render(<Form />);
     
    const input = getByPlaceholderText(placeholderMock);
    const button = getByRole("button", { name: "Add" });

     expect(input).toBeInTheDocument();
     expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
     
     fireEvent.change(input, {
        target: {
           value: 'My first task'
        }
     })

     expect(button).not.toBeDisabled()
  });
   
   it("should button to be enabled when exist value in input and after clicked the input is focused", () => {

      const { getByPlaceholderText, getByRole } = render(<Form />);
      
     const input = getByPlaceholderText(placeholderMock);
     const button = getByRole("button", { name: "Add" });

     expect(input).toBeInTheDocument();
     expect(button).toBeInTheDocument();
     expect(button).toBeDisabled();

     fireEvent.change(input, {
       target: {
         value: "My first task",
       },
     });

      expect(button).not.toBeDisabled();
      
      fireEvent.click(button)

      expect(input).toHaveFocus()
      expect(input).toHaveValue("")
   });
});
