import React, { ComponentType } from "react";
import { Loader } from "./Loader";
import "../output.css";

interface IconButtonProps {
  variant: "primary" | "secondary" | "ghost" | "danger";
  isDisabled?: boolean;
  isLoading?: boolean;
  Icon: ComponentType<{ className?: string }>;
}

export const IconButton = ({
  variant,
  isDisabled,
  isLoading,
  Icon,
}: IconButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#5469D4]";
  const variantClasses = {
    primary: "text-white bg-[#3850c7] hover:bg-[#213597]",
    secondary: "text-neutral-900 bg-[#F0F2F5] hover:bg-[#E3E6EB]",
    ghost: "text-neutral-900 bg-transparent hover:bg-[#F0F2F5]",
    danger: "text-white bg-[#C73838] hover:bg-[#972121]",
  };
  const stateClasses = {
    disabled:
      "bg-[#F0F2F5] text-[#9A9FA6] hover:bg-[#F0F2F5] cursor-not-allowed",
    loading: `${variantClasses[variant]} cursor-wait`,
  };

  const state = isDisabled ? "disabled" : isLoading ? "loading" : null;
  const stateClass = state ? stateClasses[state] : "";
  const classToApply = state ? stateClass : variantClasses[variant];
  const loaderVariant =
    variant === "primary" || variant === "danger" ? "light" : "dark";

  return (
    <button
      disabled={state === "disabled" || state === "loading"}
      className={`${baseClasses} ${classToApply} `}
    >
      {isLoading ? (
        <Loader variant={loaderVariant} />
      ) : (
        <Icon className="h-6 w-6" />
      )}
    </button>
  );
};

export default IconButton;
