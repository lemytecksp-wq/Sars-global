"use client";

import { useState, useEffect, useRef } from "react";

const TYPING_WORDS = ["Full-Stack Devs", "CTOs", "Engineers"] as const;

export function HireHero() {
  const textRef = useRef<HTMLSpanElement>(null);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let isCancelled = false;

    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function tick() {
      if (isCancelled) return;

      const currentWord = TYPING_WORDS[wordIdx];

      if (!isDeleting) {
        charIdx++;
        const nextSlice = currentWord.slice(0, charIdx);
        if (textRef.current) {
          textRef.current.textContent = nextSlice;
        }
        setDisplayedText(nextSlice);

        if (charIdx >= currentWord.length) {
          // Completed typing full phrase: pause for 1.35 seconds
          isDeleting = true;
          timer = setTimeout(tick, 1350);
        } else {
          // Typing speed: 88ms per character
          timer = setTimeout(tick, 88);
        }
      } else {
        charIdx--;
        const nextSlice = currentWord.slice(0, charIdx);
        if (textRef.current) {
          textRef.current.textContent = nextSlice;
        }
        setDisplayedText(nextSlice);

        if (charIdx <= 0) {
          // Finished deleting: advance to next phrase and pause briefly
          isDeleting = false;
          wordIdx = (wordIdx + 1) % TYPING_WORDS.length;
          timer = setTimeout(tick, 200);
        } else {
          // Deleting speed: 48ms per character
          timer = setTimeout(tick, 48);
        }
      }
    }

    // Start typing "Full-Stack Devs" character by character
    timer = setTimeout(tick, 150);

    return () => {
      isCancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section className="sars-hire-page__hero" data-nav-theme="light" aria-labelledby="hire-title">
      <div className="sars-container sars-hire-page__hero-grid">
        <div>
          <p className="sars-hire-page__eyebrow sars-hire-page__reveal is-visible">
            AI-POWERED GLOBAL TECH RECRUITMENT
          </p>
          <h1 id="hire-title" className="sars-hire-page__title sars-hire-page__reveal is-visible">
            <span>Hire Elite</span>
            <span className="sars-hire-page__title-typing-line" aria-live="polite">
              <span className="sars-hire-typing-text" ref={textRef}>{displayedText}</span>
              <span className="sars-hire-typing-cursor" aria-hidden="true">|</span>
            </span>
            <span>Worldwide</span>
          </h1>
          <p className="sars-hire-page__copy sars-hire-page__reveal is-visible">
            We connect global tech companies with pre-vetted, AI-matched engineers &mdash; deployed in hours, not weeks.
          </p>
          <div className="sars-hire-page__hero-actions sars-hire-page__reveal is-visible">
            <a className="sars-hire-page__button" href="#hire-lead-form" data-magnetic>
              Hire Elite Talent &rarr;
            </a>
            <a className="sars-hire-page__button sars-hire-page__button--light" href="#hire-process" data-magnetic>
              How It Works
            </a>
          </div>
          <div className="sars-hire-page__stats sars-hire-page__reveal is-visible" aria-label="Hiring performance statistics">
            <div className="sars-hire-page__stat">
              <strong>&lt; 48h</strong>
              <span>Hire Time</span>
            </div>
            <div className="sars-hire-page__stat">
              <strong>Top 3%</strong>
              <span>Quality</span>
            </div>
            <div className="sars-hire-page__stat">
              <strong>98%</strong>
              <span>Retention</span>
            </div>
          </div>
          <p className="sars-hire-page__bpo-link sars-hire-page__reveal is-visible">
            Need us to manage the complete process instead?{" "}
            <a href="/bpo-services/">Explore Business Process Outsourcing &rarr;</a>
          </p>
        </div>

        <aside className="sars-hire-page__dashboard" aria-label="SARS Engine AI match dashboard">
          <div className="sars-hire-page__dashboard-shell">
            <div className="sars-hire-page__dashboard-top">
              <p className="sars-hire-page__dashboard-title">SARS Engine v2.4</p>
              <div className="sars-hire-page__dashboard-nav" aria-label="Dashboard navigation icons">
                <span aria-hidden="true">&#8862;</span>
                <span aria-hidden="true">&#128101;</span>
                <span aria-hidden="true">&#128202;</span>
                <span aria-hidden="true">&#9881;&#65039;</span>
              </div>
            </div>
            <div className="sars-hire-page__dashboard-body">
              <div className="sars-hire-page__dashboard-label">
                <span>AI Match Results</span>
                <span>Live scan</span>
              </div>
              <div className="sars-hire-page__dashboard-role">
                <span className="sars-hire-page__dashboard-status">Scan Complete</span>
                <h3>Senior React Developer</h3>
              </div>
              <article className="sars-hire-page__candidate">
                <span className="sars-hire-page__avatar" aria-hidden="true">AM</span>
                <div>
                  <h4>Alex Mercer</h4>
                  <p>React, Node, AWS &middot; 8 YOE</p>
                </div>
                <div className="sars-hire-page__match">
                  <strong>98%</strong>
                  <span>Match</span>
                </div>
              </article>
              <article className="sars-hire-page__candidate">
                <span className="sars-hire-page__avatar" aria-hidden="true">PS</span>
                <div>
                  <h4>Priya Sharma</h4>
                  <p>React, TS, GraphQL &middot; 6 YOE</p>
                </div>
                <div className="sars-hire-page__match">
                  <strong>95%</strong>
                  <span>Match</span>
                </div>
              </article>
              <article className="sars-hire-page__candidate">
                <span className="sars-hire-page__avatar" aria-hidden="true">JW</span>
                <div>
                  <h4>James Wei</h4>
                  <p>Vue, React, Python &middot; 7 YOE</p>
                </div>
                <div className="sars-hire-page__match">
                  <strong>91%</strong>
                  <span>Match</span>
                </div>
              </article>
              <div className="sars-hire-page__scheduled">
                <span aria-hidden="true">&#10003;</span>
                <div>
                  <strong>Interview Scheduled</strong>
                  <small>Alex Mercer &mdash; Tomorrow 10AM</small>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
