import type { ReactNode } from "react";
import { Badge } from "./Badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  id?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, copy, id, className = "" }: SectionHeadingProps) {
  return (
    <header className={`sars-section-head${className ? ` ${className}` : ""}`}>
      <div>
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <h2 id={id} className="sars-heading-lg">
          {title}
        </h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </header>
  );
}
