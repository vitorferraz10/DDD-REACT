import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ListTodo } from ".";

describe("<ListTodo />", () => {
  it("should input have correct placeholder", () => {
    const listMock = ["My first task"];

    const { getByText } = render(<ListTodo list={listMock} />);
    const itemList = getByText("My first task");

    expect(itemList).toBeInTheDocument();
  });
});
