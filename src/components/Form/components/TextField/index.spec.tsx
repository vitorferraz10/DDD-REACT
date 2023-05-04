import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TextField } from ".";

describe('<TextField />', () => {
   it('should input have correct placeholder', () => {
      const placeholderMock = "Write you task"
      const { getByPlaceholderText } = render(
        <TextField placeholder={placeholderMock} />
      );
      const input = getByPlaceholderText(placeholderMock);

      expect(input).toBeInTheDocument()
   })
})