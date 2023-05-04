import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from ".";

describe('<Button />', () => {
   it('should render button with text content props', () => {
      const { getByText } = render(<Button textContent="add task in your list" />)
      
      const button = getByText("add task in your list");

      expect(button).toBeInTheDocument()
   
   })

    it("should render button with property disabled", () => {
      const { getByText } = render(
        <Button textContent="add task in your list" disabled/>
      );

      const button = getByText("add task in your list");
      expect(button).toBeDisabled();
    });
})
