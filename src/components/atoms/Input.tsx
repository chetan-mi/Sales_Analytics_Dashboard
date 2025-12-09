import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => (
  <input
    className={clsx(
      "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm",
      "focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20",
      "disabled:cursor-not-allowed disabled:bg-gray-100",
      className
    )}
    {...props}
  />
);

export default Input;

