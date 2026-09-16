const page = document.querySelector(".sars-bpo-page");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const trackBpoEvent = (eventName, detail = {}) => {
  const payload = {
    event: eventName,
    page: "/bpo-services/",
    service: "Business Process Outsourcing",
    ...detail
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  window.dispatchEvent(new CustomEvent("sars:bpo-event", { detail: payload }));
};

const revealElements = () => {
  const items = [...page.querySelectorAll(".sars-bpo-page__reveal")];

  if (reducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 5, 4) * 45}ms`;
    observer.observe(item);
  });
};

const setupFaq = () => {
  const faqs = [...page.querySelectorAll(".sars-bpo-faq__list details")];

  faqs.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open) return;
      faqs.forEach((other) => {
        if (other !== detail) other.removeAttribute("open");
      });
      trackBpoEvent("faq_open", {
        question: detail.querySelector("summary")?.textContent?.trim() || ""
      });
    });
  });
};

const setupAttribution = () => {
  const params = new URLSearchParams(window.location.search);

  page.querySelectorAll("[data-utm-field]").forEach((field) => {
    const key = field.getAttribute("data-utm-field");
    field.value = params.get(key) || "";
  });

  const leadSource = page.querySelector("[data-lead-source]");
  if (leadSource) {
    leadSource.value = params.get("utm_source") || (document.referrer ? "referral" : "direct");
  }
};

const setupFormTracking = () => {
  const form = page.querySelector("[data-bpo-form]");
  if (!form) return;

  let started = false;

  const start = () => {
    if (started) return;
    started = true;
    trackBpoEvent("bpo_form_start");
  };

  form.addEventListener("focusin", start, { once: true });
  form.addEventListener("input", start, { once: true });
  form.addEventListener("submit", () => {
    const formData = new FormData(form);
    trackBpoEvent("bpo_requirement_submit", {
      process_required: formData.get("process_required") || "",
      process_type: formData.get("process_type") || "",
      market_type: formData.get("market_type") || "",
      industry: formData.get("industry") || ""
    });
  });
};

const setupClickTracking = () => {
  page.querySelectorAll("[data-bpo-track]").forEach((item) => {
    item.addEventListener("click", () => {
      trackBpoEvent(item.getAttribute("data-bpo-track"), {
        label: item.textContent.trim(),
        href: item.getAttribute("href") || "",
        future_path: item.getAttribute("data-bpo-future-path") || ""
      });
    });
  });
};

const setupSmoothAnchors = () => {
  page.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = page.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    });
  });
};

if (page) {
  requestAnimationFrame(() => page.classList.add("is-ready"));
  revealElements();
  setupFaq();
  setupAttribution();
  setupFormTracking();
  setupClickTracking();
  setupSmoothAnchors();
}
