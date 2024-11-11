import { ReactNode } from "@tanstack/react-router";

interface IButton {
  children?: ReactNode;
}
const Button = ({ children, ...rest }: IButton) => {
  return (
    <button
      className="bg-red-600 hover:bg-red-700 text-white px-8 py-1 rounded-md"
      {...rest}
    >
      Button
    </button>
  );
};

export default Button;
