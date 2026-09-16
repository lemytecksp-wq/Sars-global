import Image from "next/image";

export function Preloader() {
  return (
    <div className="sars-preloader" data-preloader aria-hidden="true">
      <div className="sars-preloader__inner">
        <div className="sars-preloader__sequence">
          <span className="sars-preloader__word sars-preloader__word--welcome">Welcome</span>
          <span className="sars-preloader__word sars-preloader__word--brand">SARS Global</span>
        </div>
        <Image
          className="sars-preloader__logo"
          src="/assets/img/sars-new-logo.png"
          alt=""
          width={120}
          height={120}
          priority
        />
        <p className="sars-preloader__text">
          <span>Creative Technology Agency</span>
        </p>
        <div className="sars-preloader__bar">
          <div className="sars-preloader__progress" data-preloader-bar />
        </div>
        <span className="sars-preloader__count" data-preloader-count>
          0%
        </span>
      </div>
    </div>
  );
}
