import React, { ComponentType } from "react";
import {
  CheckCircleIcon,
  MegaphoneIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import "../output.css";

interface BannerProps {
  variant: "positive" | "info" | "warning" | "danger" | "announcement";
  content: string;
}

export const Banner = ({ variant, content }: BannerProps) => {
  const baseClasses =
    "flex flex-row items-center justify-left pl-4 pr-6 py-4 gap-3 rounded text-base font-manrope ";
  const variantClasses = {
    positive: "bg-[#EFFBF5]",
    info: "bg-[#EFF1FB]",
    warning: "bg-[#FBF7EF]",
    danger: "bg-[#FBEFEF]",
    announcement: "bg-white",
  };

  const icon = {
    positive: CheckCircleIcon,
    info: InformationCircleIcon,
    warning: XCircleIcon,
    danger: XCircleIcon,
    announcement: MegaphoneIcon,
  };

  const iconClass = {
    positive: "text-[#219760]",
    info: "text-[#213597]",
    warning: "text-[#976F21]",
    danger: "text-[#972121]",
    announcement: "text-[#131314]",
  };

  const Icon = icon[variant];
  const classToApply = variantClasses[variant];

  return (
    <div className={`${baseClasses} ${classToApply}`}>
      {Icon && <Icon className={`h-5 w-5 ${iconClass[variant]}`} />}
      <div className="text-[#131314]">{content}</div>
    </div>
  );
};

export default Banner;
