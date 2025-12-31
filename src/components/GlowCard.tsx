import { useRef } from "react";

interface cardProps {
  review: string;
  imgPath: string;
  logoPath?: string;
  title?: string;
  date?: string;
  responsibilities?: string[];
}

interface GlowCardProps {
  card: cardProps;
  children: React.ReactNode;
  index: number;
}

const GlowCard = ({ card, children, index }: GlowCardProps) => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index];
      if (!card) return;

      /* get the mouse position relative to the card */
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      /* calc the angle from the center of the card to the mouse position */
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      angle = (angle + 360) % 360; /*  normalize angle to [0, 360) */
      angle = angle + 60; /*  offset for better visual effect */

      card.style.setProperty("--start", angle.toString());
    };

  return (
    <div
      ref={(el) => {
        if (el) cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            className="size-5"
            src="/images/star.png"
            key={i}
            alt="star"
            loading="lazy"
          />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
