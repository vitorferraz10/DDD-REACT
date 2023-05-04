import { ChangeEvent, RefObject } from "react";

type TextFieldProps = {
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: RefObject<HTMLInputElement>;
  value?: string
};

export const TextField = ({
  placeholder,
  onChange,
  inputRef,
  value,
}: TextFieldProps) => {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      ref={inputRef}
      value={value}
    />
  );
};
