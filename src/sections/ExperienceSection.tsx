import { useEffect, useRef } from "react";

const roles = [
  {
    title: "Senior Software Developer",
    date: "May 2025 - Present",
    summary: "Enterprise application development, integrations, and delivery ownership.",
    points: [
      "Led frontend delivery across four product teams and mentored three engineers.",
      "Own CI/CD and semantic-release for the Angular tlx-library, from release conventions to automated package publishing.",
      "Contributed improvements to Automata's testing agents and fully built its API-testing feature.",
    ],
  },
  {
    title: "Software Development Consultant",
    date: "Mar 2023 - May 2025",
    summary: "A shared frontend foundation for internal product teams.",
    points: [
      "Built and documented complex tables, app frames, tab panels, and other library components adopted across 10+ internal platforms.",
      "Upgraded the app-frame component, reducing initial load time in consuming applications from 10-12 seconds to 1-2 seconds.",
      "Evaluated React, Angular, and Web Components; authored ADRs that informed frontend strategy.",
      "Set up CI/CD and Lighthouse CI, reducing deployment time from 45 to 15 minutes.",
    ],
  },
  {
    title: "Graduate Engineering Trainee",
    date: "Jul 2022 - Mar 2023",
    summary: "Backend reliability and enterprise data workflows.",
    points: [
      "Built Node.js/PostgreSQL modules for an enterprise part-numbering system; cut slow queries from 8 seconds to 800 milliseconds.",
      "Raised backend test coverage from 30% to 80% with Jest.",
    ],
  },
  {
    title: "Software Engineering Intern",
    date: "Feb 2022 - Jun 2022",
    summary: "The foundation: Node.js, REST APIs, PostgreSQL, and full-stack development.",
    points: [],
  },
];

const ExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const entries = Array.from(timeline.querySelectorAll<HTMLElement>(".career-entry"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const centers = entries.map((entry) => {
        const dot = entry.querySelector<HTMLElement>(".career-dot");
        return entry.offsetTop + (dot ? dot.offsetTop + dot.offsetHeight / 2 : 0);
      });
      const first = centers[0];
      const last = centers[centers.length - 1];
      const readingPosition = window.innerHeight * 0.55 - timeline.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, (readingPosition - first) / (last - first)));
      timeline.style.setProperty("--career-progress", String(progress));
      timeline.style.setProperty("--career-line-top", `${first}px`);
      timeline.style.setProperty("--career-line-height", `${last - first}px`);
      entries.forEach((entry, index) => entry.classList.toggle("is-reached", readingPosition >= centers[index]));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(timeline);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("portfolio:layout-change", schedule);
    update();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("portfolio:layout-change", schedule);
    };
  }, []);

  return (
  <section id="experience" className="section experience-section" aria-labelledby="experience-title">
    <div className="container experience-grid">
      <div className="experience-intro">
        <p className="eyebrow"><span className="section-index">02 /</span> Experience</p>
        <h2 id="experience-title">One enterprise.<br />A growing scope.</h2>
        <p>From backend fundamentals to frontend libraries and AI-powered tooling. Building at the intersection of product needs and engineering execution.</p>
        <div className="employer-card">
          <span className="employer-monogram" aria-hidden="true">DT</span>
          <div><strong>Daimler Truck</strong><span>Innovation Center India</span><small>Bengaluru / Feb 2022 - Present</small></div>
        </div>
        <a className="text-link" href="/resume.html">View full resume <span aria-hidden="true">&#8599;</span></a>
        <div className="recognition">
          <p className="eyebrow">Recognized at Daimler Truck</p>
          <ul>
            <li><span>The Powerhouse Award</span><span>2026</span></li>
            <li><span>Persistent Pursuit Award</span><span>2024</span></li>
            <li><span>Rising Star Award</span><span>2023</span></li>
          </ul>
        </div>
      </div>
      <div className="career-timeline" ref={timelineRef}>
        <div className="career-progress" aria-hidden="true" />
        {roles.map((role, index) => (
          <article className="career-entry" key={role.title}>
            <div className={`career-dot${index === 0 ? " is-current" : ""}`} aria-hidden="true" />
            <p className="career-date">{role.date}{index === 0 && <span>Current</span>}</p>
            <h3>{role.title}</h3>
            <p className="career-summary">{role.summary}</p>
            {role.points.length > 0 && <ul>{role.points.map((point) => <li key={point}>{point}</li>)}</ul>}
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ExperienceSection;
