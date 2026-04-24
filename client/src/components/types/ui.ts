import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface ButtonType {
  size?: "small" | "medium" | "large";
  usePredefinedSize?: boolean;
  color?: "primary" | "secondary" | "tertiary";
  usePredefinedcolor?: boolean;
  className?: string;
  width?: string;
  rounded?: string;
  attrs?: ButtonHTMLAttributes<HTMLButtonElement> &
    Omit<HTMLAttributes<HTMLButtonElement>, "className">;
  children?: ReactNode;
}