const hireRoot = document.querySelector(".sars-hire-page");

if (hireRoot) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  hireRoot.classList.add("is-ready");

  const rotator = hireRoot.querySelector("[data-hire-rotator]");
  const rotatorWord = hireRoot.querySelector("[data-hire-rotator-word]");
  if (rotator && rotatorWord) {
    const words = ["Full-Stack Devs", "CTOs", "Engineers"];
    let activeIndex = 0;
    rotator.setAttribute("aria-label", words[activeIndex]);

    if (!reducedMotion) {
      window.setInterval(() => {
        activeIndex = (activeIndex + 1) % words.length;
        rotatorWord.classList.add("is-exiting");

        window.setTimeout(() => {
          rotatorWord.textContent = words[activeIndex];
          rotator.setAttribute("aria-label", words[activeIndex]);
          rotatorWord.classList.remove("is-exiting");
          rotatorWord.classList.add("is-entering");

          window.requestAnimationFrame(() => {
            rotatorWord.classList.remove("is-entering");
          });
        }, 500);
      }, 2400);
    }
  }

  const revealItems = [...hireRoot.querySelectorAll(".sars-hire-page__reveal")];
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index * 55, 280)}ms`);
      revealObserver.observe(item);
    });
  }

  const talentSelect = hireRoot.querySelector("#hire-required-talent");
  hireRoot.querySelectorAll("[data-hire-select]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (!talentSelect) return;
      const requestedRole = trigger.dataset.hireSelect || "";
      const matchingOption = [...talentSelect.options].find((option) => option.value === requestedRole || option.textContent === requestedRole);
      if (!matchingOption) return;
      talentSelect.value = matchingOption.value || matchingOption.textContent;
      talentSelect.closest(".sars-field")?.classList.remove("is-invalid");
      talentSelect.setAttribute("aria-invalid", "false");
      talentSelect.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });

  const process = hireRoot.querySelector("[data-hire-page-process]");
  const updateProcess = () => {
    if (!process) return;
    const rect = process.getBoundingClientRect();
    const progress = Math.min(Math.max((window.innerHeight - rect.top) / Math.max(rect.height + window.innerHeight * 0.18, 1), 0), 1);
    process.style.setProperty("--hire-progress", `${Math.round(progress * 100)}%`);
  };
  updateProcess();
  window.addEventListener("scroll", updateProcess, { passive: true });
  window.addEventListener("resize", updateProcess);

  const countItems = [...hireRoot.querySelectorAll("[data-hire-count]")];
  const runCount = (item) => {
    if (item.dataset.hireCounted === "true") return;
    item.dataset.hireCounted = "true";
    const target = Number(item.dataset.hireCount || 0);
    const suffix = item.dataset.suffix || "";
    const prefix = item.dataset.prefix || "";
    if (reducedMotion) {
      item.textContent = `${prefix}${target}${suffix}`;
      return;
    }
    const start = performance.now();
    const duration = 1100;
    const tick = (now) => {
      const amount = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - amount, 3);
      item.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (amount < 1) window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  };

  if (countItems.length) {
    countItems.forEach((item) => {
      const target = Number(item.dataset.hireCount || 0);
      const suffix = item.dataset.suffix || "";
      const prefix = item.dataset.prefix || "";
      item.textContent = `${prefix}${target}${suffix}`;
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      countItems.forEach(runCount);
    } else {
      const countObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          runCount(entry.target);
          countObserver.unobserve(entry.target);
        });
      }, { threshold: 0.42 });
      countItems.forEach((item) => countObserver.observe(item));
    }
  }

  hireRoot.querySelectorAll(".sars-hire-page__faq details").forEach((details) => {
    details.addEventListener("toggle", () => {
      if (!details.open) return;
      hireRoot.querySelectorAll(".sars-hire-page__faq details").forEach((other) => {
        if (other !== details) other.open = false;
      });
    });
  });
}
