import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Todo } from ".";
import { TodoProvider } from "../../context/TodoProvider";


describe("<Todo />", () => {
  it("should input have correct placeholder", () => {
    const placeholderMock = "Write your task";
    const { getByPlaceholderText, getByRole, getByText } = render(
      <TodoProvider>
        <Todo />
      </TodoProvider>
    );

    const input = getByPlaceholderText(placeholderMock);
    const button = getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.change(input, {
      target: {
        value: "My first task"
      }
    })

    fireEvent.click(button);
        
    const list = getByText("My first task");
    
    expect(list).toBeInTheDocument()

  });
});
