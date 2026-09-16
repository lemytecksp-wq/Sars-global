"use client";

import { useEffect } from "react";

type BodyClassProps = {
  className?: string;
};

export function BodyClass({ className = "" }: BodyClassProps) {
  useEffect(() => {
    const classes = className.split(/\s+/).filter(Boolean);
    if (classes.length) {
      document.body.classList.add(...classes);
    }

    return () => {
      if (classes.length) {
        document.body.classList.remove(...classes);
      }
    };
  }, [className]);

  return null;
}
