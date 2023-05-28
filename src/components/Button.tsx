import React, { ComponentType } from "react";
import "../output.css";
import { Loader } from "./Loader";

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost" | "danger";
  isDisabled?: boolean;
  isLoading?: boolean;
  LeftIcon?: ComponentType<{ className?: string }>;
  RightIcon?: ComponentType<{ className?: string }>;
  label: string;
  fullWidth?: boolean;
}

export const Button = ({
  variant,
  isDisabled,
  isLoading,
  LeftIcon,
  RightIcon,
  label,
  fullWidth,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center px-3 py-2 gap-3 rounded text-base font-manrope font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#5469D4]";
  const variantClasses = {
    primary: "text-white bg-[#3850c7] hover:bg-[#213597]",
    secondary: "text-[#131314] bg-[#F0F2F5] hover:bg-[#E3E6EB]",
    ghost: "text-[#131314] bg-transparent hover:bg-[#F0F2F5]",
    danger: "text-white bg-[#C73838] hover:bg-[#972121]",
  };
  const stateClasses = {
    disabled:
      "bg-[#F0F2F5] text-[#9A9FA6] hover:bg-[#F0F2F5] cursor-not-allowed",
    loading: `${variantClasses[variant]} cursor-wait`,
  };

  const fullWidthClass = fullWidth ? "w-full" : "";

  const state = isDisabled ? "disabled" : isLoading ? "loading" : null;
  const stateClass = state ? stateClasses[state] : "";
  const classToApply = state ? stateClass : variantClasses[variant];
  const loaderVariant =
    variant === "primary" || variant === "danger" ? "light" : "dark";

  return (
    <button
      disabled={state === "disabled" || state === "loading"}
      className={`${baseClasses} ${classToApply} ${fullWidthClass}`}
    >
      {isLoading ? (
        <div>
          <Loader variant={loaderVariant} />
        </div>
      ) : (
        <>
          {LeftIcon && <LeftIcon className="h-6 w-6" />}
          {label}
          {RightIcon && <RightIcon className="h-6 w-6" />}
        </>
      )}
    </button>
  );
};

export default Button;
