import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";
import classNames from "classnames";

// Define custom props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
}

// Narrowed type just for validation
type VariationProps = Pick<
  ButtonProps,
  "primary" | "secondary" | "success" | "warning" | "danger"
>;

// Custom runtime validation
const validateVariation = ({
  primary,
  secondary,
  success,
  warning,
  danger,
}: VariationProps) => {
  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!success) +
    Number(!!warning) +
    Number(!!danger);

  if (count > 1) {
    console.warn(
      "Only one of primary, secondary, success, warning, danger can be true."
    );
  }
};

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  validateVariation({ primary, secondary, success, warning, danger });

  const classes = classNames(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
