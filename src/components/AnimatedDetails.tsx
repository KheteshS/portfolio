import { useEffect, useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

const AnimatedDetails = ({ children }: { children: ReactNode }) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const targetOpen = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finishIfMotionDisabled = () => {
      if (preference.matches || document.documentElement.dataset.motion === "paused") {
        animationRef.current?.finish();
      }
    };
    preference.addEventListener("change", finishIfMotionDisabled);
    document.addEventListener("portfolio:motion-change", finishIfMotionDisabled);
    return () => {
      preference.removeEventListener("change", finishIfMotionDisabled);
      document.removeEventListener("portfolio:motion-change", finishIfMotionDisabled);
      if (animationRef.current) {
        animationRef.current.onfinish = null;
        animationRef.current.cancel();
      }
    };
  }, []);

  const toggle = (event: MouseEvent<HTMLElement>) => {
    const details = detailsRef.current;
    const content = contentRef.current;
    if (!details || !content) return;
    event.preventDefault();

    const startHeight = details.open ? content.getBoundingClientRect().height : 0;
    const startOpacity = details.open ? Number(getComputedStyle(content).opacity) : 0;
    const open = animationRef.current ? !targetOpen.current : !details.open;
    targetOpen.current = open;
    if (animationRef.current) {
      animationRef.current.onfinish = null;
      animationRef.current.cancel();
      animationRef.current = null;
    }

    details.dataset.expanded = String(open);
    details.open = true;
    const notifyLayout = () => document.dispatchEvent(new Event("portfolio:layout-change"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        document.documentElement.dataset.motion === "paused") {
      details.open = open;
      notifyLayout();
      return;
    }

    const animation = content.animate(
      [
        { height: `${startHeight}px`, opacity: startOpacity },
        { height: `${open ? content.scrollHeight : 0}px`, opacity: open ? 1 : 0 },
      ],
      { duration: 360, easing: "cubic-bezier(.22, 1, .36, 1)", fill: "both" }
    );
    animationRef.current = animation;
    animation.onfinish = () => {
      if (animationRef.current !== animation) return;
      details.open = open;
      animationRef.current = null;
      animation.cancel();
      notifyLayout();
    };
  };

  return (
    <details className="project-details" ref={detailsRef}>
      <summary onClick={toggle}>Read the engineering notes <span className="details-symbol" aria-hidden="true">+</span></summary>
      <div className="disclosure-content" ref={contentRef}>
        <div className="engineering-notes">{children}</div>
      </div>
    </details>
  );
};

export default AnimatedDetails;
