import React, { ComponentType } from "react";
import Icon, { IconName } from "./Icon";
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

  const icon: { [K in BannerProps["variant"]]: IconName } = {
    positive: "CheckCircleIcon",
    info: "InformationCircleIcon",
    warning: "XCircleIcon",
    danger: "XCircleIcon",
    announcement: "MegaphoneIcon",
  };

  const iconClass = {
    positive: "text-[#219760]",
    info: "text-[#213597]",
    warning: "text-[#976F21]",
    danger: "text-[#972121]",
    announcement: "text-[#131314]",
  };

  const iconName = icon[variant];
  const classToApply = variantClasses[variant];

  return (
    <div className={`${baseClasses} ${classToApply}`}>
      {iconName && (
        <Icon icon={iconName} size="24" className={iconClass[variant]} />
      )}
      <div className="text-[#131314]">{content}</div>
    </div>
  );
};

export default Banner;
