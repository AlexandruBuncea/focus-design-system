import React, { ComponentType } from "react";
import { Loader } from "./Loader";
import Icon, { IconName } from "./Icon";
import "../output.css";

interface IconButtonProps {
  variant: "primary" | "secondary" | "ghost" | "danger";
  isDisabled?: boolean;
  isLoading?: boolean;
  icon: IconName;
}

export const IconButton = ({
  variant,
  isDisabled,
  isLoading,
  icon,
}: IconButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#5469D4]";
  const variantClasses = {
    primary:
      "text-white bg-[#131314] hover:bg-[#44474A] shadow-[inset_0_0px_0px_1px_#44474A,0_1px_2px_0_rgb(0,0,0,0.05)]",
    secondary:
      "text-[#131314] bg-white hover:bg-[#F0F2F5] shadow-[inset_0_0px_0px_1px_#D1D5DC,0_1px_2px_0_rgb(0,0,0,0.05)]",
    ghost: "text-neutral-900 bg-transparent hover:bg-[#F0F2F5]",
    danger: "text-white bg-[#C73838] hover:bg-[#972121] shadow-sm",
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
        <Icon icon={icon} size="24" />
      )}
    </button>
  );
};

export default IconButton;
