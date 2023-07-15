import React, { FC } from "react";
import { PrimaryBtn, SecondaryBtn, TertiaryBtn, GhostBtn, DangerBtn } from "./style";

export interface ButtonProps {
  text?: string | React.ReactNode;
  onClick?: any;
  className?: any;
  icon?: React.ReactNode;
  testId?: string;
  style?: any;
  type?: string;
  isLoading?: boolean;
  isDisable?: boolean;
  size?: "middle" | "small" | "large" | "default" | any;
  variant?: string;
  shape?: "round" | "square" | "circle" | any;
  id?: string;
}

const getButtonType = (type: any) => {
  switch (type) {
    case "primary":
      return PrimaryBtn;
    case "secondary":
      return SecondaryBtn;
    case "tertiary":
      return TertiaryBtn;
    case "ghost":
      return GhostBtn;
    case "danger":
        return DangerBtn;
    default:
      return PrimaryBtn;
  }
};

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  type,
  testId,
  style,
  className,
  isLoading,
  isDisable,
  icon,
  size,
  variant,
  shape,
  id,
}) => {
  const ButtonTag = getButtonType(variant);
  return (
    
    <ButtonTag
      id={id}
      style={style}
      //@ts-ignore
      htmlType={type}
      icon={icon}
      shape={shape}
      onClick={(e :any) => !isLoading && onClick && onClick(e)}
      data-testid={testId}
      className={className}
      disabled={isDisable || isLoading}
      loading={isLoading}
      size={size || "default"}
      type={
        variant === "secondary" || variant === "tertiary"
          ? "default"
          : variant === "ghost"
          ? "ghost"
          : "primary"
      }
    >
      {text}
    </ButtonTag>
    
  );
};
