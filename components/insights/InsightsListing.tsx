"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/content/blog";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function ArticleVisual({ post, priority = false }: { post: (typeof BLOG_POSTS)[number]; priority?: boolean }) {
  return (
    <div className="sars-next-article-visual">
      {post.image ? (
        <Image
          src={post.image}
          alt={`${post.title} featured visual`}
          fill
          sizes={priority ? "(min-width: 1024px) 44vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          priority={priority}
        />
      ) : null}
      <span>{post.visualLabel}</span>
    </div>
  );
}

export function InsightsListing() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => activeCategory === "All" || post.category === activeCategory);
  }, [activeCategory]);
  const featured = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <main id="main" className="sars-next-insights">
      <section className="sars-next-insights-hero" data-nav-theme="dark">
        <div className="sars-container">
          <div className="sars-next-insights-hero__inner">
            <div>
              <p className="sars-kicker">Insights</p>
              <h1 className="sars-display">Ideas, Insights &amp; Digital Perspectives</h1>
            </div>
            <div>
              <p className="sars-copy-lg">
                Practical thinking on growth, technology, AI, design and digital performance from the SARS Global team.
              </p>
              <div className="sars-next-insights__filters" aria-label="Filter articles by category">
                {BLOG_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    className={activeCategory === category ? "is-active" : undefined}
                    type="button"
                    aria-pressed={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {featured ? (
            <article className="sars-next-featured sars-next-article-card">
              <ArticleVisual post={featured} priority />
              <div className="sars-next-article-body">
                <div className="sars-next-article-meta">
                  <span>{featured.category}</span>
                  <span>{formatDate(featured.published)}</span>
                  {featured.readTime ? <span>{featured.readTime}</span> : null}
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.description}</p>
                <Link className="sars-next-featured__link" href={featured.route}>
                  Read Article <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      <section className="sars-section sars-section--cream">
        <div className="sars-container">
          <div className="sars-next-latest-head">
            <p className="sars-kicker">Latest Insights</p>
            <h2 className="sars-heading-lg">Latest Insights</h2>
          </div>

          <div className="sars-next-blog-grid">
            {(gridPosts.length ? gridPosts : filteredPosts).map((post) => (
              <article className="sars-next-card sars-next-article-card" key={post.slug}>
                <ArticleVisual post={post} />
                <div className="sars-next-card__content">
                  <div className="sars-next-article-meta">
                    <span>{post.category}</span>
                    <span>{formatDate(post.published)}</span>
                    {post.readTime ? <span>{post.readTime}</span> : null}
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <Link className="sars-next-card__link" href={post.route}>
                    Read Article <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
