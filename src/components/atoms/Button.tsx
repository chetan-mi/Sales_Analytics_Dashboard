import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-blue text-white hover:bg-blue-800 focus-visible:outline-brand-blue",
  secondary:
    "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 focus-visible:outline-brand-blue",
};

const Button = ({ variant = "primary", className, children, ...props }: ButtonProps) => (
  <button className={clsx(baseClasses, variantClasses[variant], className)} {...props}>
    {children}
  </button>
);

export default Button;

