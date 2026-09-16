import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "dark";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "sars-button",
  secondary: "sars-button sars-button--ghost",
  dark: "sars-button sars-button--dark",
};

export function Button({ children, href, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <Link className={`${variantClass[variant]}${className ? ` ${className}` : ""}`} href={href} {...props}>
      {children}
    </Link>
  );
}
