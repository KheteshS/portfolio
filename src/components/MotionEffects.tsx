import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MotionEffects = () => {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "running";
    document.dispatchEvent(new Event("portfolio:motion-change"));
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [paused]);

  useGSAP(() => {
    if (paused) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".hero-copy > *",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.11, ease: "power3.out", clearProps: "transform,opacity" }
      );
      gsap.fromTo(".hero-visual",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.25, ease: "power3.out", clearProps: "transform,opacity" }
      );

      gsap.utils.toArray<HTMLElement>(".section-heading, .project-card, .experience-intro, .career-entry, .capability-card, .contact-card").forEach((element) => {
        gsap.fromTo(element,
          { y: 35, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: { trigger: element, start: "top 96%", once: true },
          }
        );
      });

      gsap.fromTo(".impact-strip > div",
        { y: 18, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.7,
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: ".impact-strip", start: "top 98%", once: true },
        }
      );
      gsap.to(".reading-progress > span", {
        scaleX: 1, ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: true },
      });

      const refreshOnToggle = (event: Event) => {
        if (event.target instanceof HTMLDetailsElement) ScrollTrigger.refresh();
      };
      const refreshOnLayoutChange = () => ScrollTrigger.refresh();
      document.addEventListener("toggle", refreshOnToggle, true);
      document.addEventListener("portfolio:layout-change", refreshOnLayoutChange);
      return () => {
        document.removeEventListener("toggle", refreshOnToggle, true);
        document.removeEventListener("portfolio:layout-change", refreshOnLayoutChange);
      };
    });

    media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const cleanups = Array.from(document.querySelectorAll<HTMLElement>("[data-spotlight]"), (element) => {
        let frame = 0;
        const move = (event: PointerEvent) => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            const bounds = element.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width;
            const y = (event.clientY - bounds.top) / bounds.height;
            element.style.setProperty("--pointer-x", `${x * 100}%`);
            element.style.setProperty("--pointer-y", `${y * 100}%`);
            element.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
            element.style.setProperty("--tilt-y", `${(x - 0.5) * 7}deg`);
          });
        };
        const reset = () => {
          cancelAnimationFrame(frame);
          element.style.removeProperty("--pointer-x");
          element.style.removeProperty("--pointer-y");
          element.style.removeProperty("--tilt-x");
          element.style.removeProperty("--tilt-y");
        };
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", reset);
        return () => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", reset);
          reset();
        };
      });
      return () => cleanups.forEach((cleanup) => cleanup());
    });

    return () => media.revert();
  }, { dependencies: [paused], revertOnUpdate: true });

  return (
    <>
      <div className="reading-progress" aria-hidden="true"><span /></div>
      <button
        className="motion-toggle"
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        <span className="motion-bars" aria-hidden="true"><i /><i /><i /></span>
        {paused ? "Resume motion" : "Pause motion"}
      </button>
    </>
  );
};

export default MotionEffects;
