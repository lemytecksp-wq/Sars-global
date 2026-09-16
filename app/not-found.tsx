import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="sars-page-main">
      <section className="sars-section sars-section--cream">
        <div className="sars-container">
          <p className="sars-kicker">404</p>
          <h1 className="sars-display">Page not found</h1>
          <p className="sars-copy-lg">
            The page you are looking for may have moved, but the SARS Global site is still right here.
          </p>
          <Link className="sars-button" href="/">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
