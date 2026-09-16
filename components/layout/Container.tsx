import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`sars-container${className ? ` ${className}` : ""}`}>{children}</div>;
}
