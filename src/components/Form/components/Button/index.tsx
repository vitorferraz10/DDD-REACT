type ButtonProps = {
  textContent: string;
  disabled?: boolean;
};

export const Button = ({ textContent, disabled }: ButtonProps) => {
  return (
    <button disabled={disabled} type="submit">
      {textContent}
    </button>
  );
};

export default Button;
