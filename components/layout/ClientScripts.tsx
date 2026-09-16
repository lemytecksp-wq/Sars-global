"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const refresh = () => {
      (window as Window & { SARSRefresh?: () => void }).SARSRefresh?.();
    };

    const frame = window.requestAnimationFrame(refresh);
    const timeout = window.setTimeout(refresh, 240);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <>
      <Script src="/assets/js/main.js?v=20260908b" type="module" strategy="afterInteractive" />
      <Script src="/assets/js/hire-talent.js?v=20260820a" type="module" strategy="afterInteractive" />
      <Script src="/assets/js/bpo-services.js?v=20260820a" type="module" strategy="afterInteractive" />
    </>
  );
}
