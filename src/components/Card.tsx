import React, { ComponentType } from "react";
import "../output.css";
import Button from "./Button";
import Icon, { IconName } from "./Icon";

interface CardProps {
  title: string;
  description: string;
  mainAction: string;
  secondaryAction: string;
  icon?: IconName;
}

export const Card = ({
  title,
  description,
  mainAction,
  secondaryAction,
  icon,
}: CardProps) => {
  const baseClasses =
    "flex flex-col gap-4 p-4 rounded-md bg-white border border-[#D1D5DC] w-[320px]";
  const titleClasses = "text-xl font-semibold text-[#131314]";
  const descriptionClasses = "text-base text-[#44474A] text-clamp-2";

  return (
    <div className={`${baseClasses}`}>
      {icon && (
        <div className="rounded-full bg-[#FAFAFA] w-10 h-10 flex items-center justify-center">
          <Icon icon={icon} size="24" />
        </div>
      )}
      <div className="flex flex-col gap-0">
        <div className={`${titleClasses}`}>{title}</div>
        <div className={`${descriptionClasses}`}>{description}</div>
      </div>
      <div className="flex flex-row gap-2">
        <Button variant="primary" label={mainAction} />
        <Button variant="secondary" label={secondaryAction} />
      </div>
    </div>
  );
};

export default Card;
