import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Todo } from ".";
import { TodoProvider } from "../../context/TodoProvider";
import { useListTodo } from "../../hooks/useListTodo";

vi.mock("../../hooks/useListTodo", () => {
  return {
    useListTodo: vi.fn(),
  };
});


describe("<Todo />", () => {
  const updateState = vi.fn()

  beforeEach(() => {
    (useListTodo as jest.Mock).mockReturnValue({
      listTodo: ["My first task"],
      setListTodo: updateState,
    });
  });

  it("should input have correct placeholder", () => {
    const placeholderMock = "Write your task";
    const { getByPlaceholderText, getByRole, getByText } = render(
      <TodoProvider>
        <Todo />
      </TodoProvider>
    );

    const input = getByPlaceholderText(placeholderMock);
    const button = getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.change(input, {
      target: {
        value: "My second task",
      },
    });

    fireEvent.click(button);

    const item1 = getByText("My first task");
  
    expect(item1).toBeInTheDocument();
    
    expect(updateState).toHaveBeenCalled();
  
  });
});
