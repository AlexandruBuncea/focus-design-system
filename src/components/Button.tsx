import React, { ComponentType } from "react";
import "../output.css";
import { Loader } from "./Loader";
import Icon, { IconName } from "./Icon";

interface ButtonProps {
  variant: "primary" | "secondary" | "ghost" | "danger";
  isDisabled?: boolean;
  isLoading?: boolean;
  LeftIcon?: IconName;
  RightIcon?: IconName;
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
    "inline-flex items-center justify-center px-3 py-2 gap-3 rounded-md text-base font-manrope font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#5469D4]";
  const variantClasses = {
    primary:
      "text-white bg-[#131314] hover:bg-[#44474A] shadow-[inset_0_0px_0px_1px_#44474A,0_1px_2px_0_rgb(0,0,0,0.05)]",
    secondary:
      "text-[#131314] bg-white hover:bg-[#F0F2F5] shadow-[inset_0_0px_0px_1px_#D1D5DC,0_1px_2px_0_rgb(0,0,0,0.05)]",
    ghost: "text-[#131314] bg-transparent hover:bg-[#F0F2F5]",
    danger: "text-white bg-[#C73838] hover:bg-[#972121] shadow-sm",
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
          {LeftIcon && <Icon icon={LeftIcon} size="24" />}
          {label}
          {RightIcon && <Icon icon={RightIcon} size="24" />}
        </>
      )}
    </button>
  );
};

export default Button;
