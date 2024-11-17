import { ReactNode } from "@tanstack/react-router";

interface IButton {
  children?: ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

const Button = ({
  children,
  className,
  bgColor = "bg-red-600",
  textColor = "text-white",
  ...rest
}: IButton) => {
  return (
    <button
      className={`${bgColor} ${textColor}  cursor-pointer px-8 py-2 rounded-md ${className} kode_mono_font`}
      {...rest}
    >
      {children || "Button"}
    </button>
  );
};

export const RoundedButton = ({ children }: IButton) => {
  return (
    <button className="bg-white text-black px-10  rounded-full kode_mono_font py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
      {children}
    </button>
  );
};

export default Button;
