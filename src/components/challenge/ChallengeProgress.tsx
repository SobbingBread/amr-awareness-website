import { useEffect, useRef } from "react";
import { RotateCcw } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface ChallengeProgressProps {
  explored: number;
  total: number;
  onReset: () => void;
}

export function ChallengeProgress({ explored, total, onReset }: ChallengeProgressProps) {
  const { t } = useLanguage();
  const pct = total > 0 ? explored / total : 0;
  const complete = explored >= total && total > 0;
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    if (complete && !firedRef.current) {
      firedRef.current = true;
      burstConfetti(canvasRef.current);
    }
    if (!complete) firedRef.current = false;
  }, [complete]);

  return (
    <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-midnight/90 p-3 shadow-xl backdrop-blur-sm">
      <canvas
        ref={canvasRef}
        width={260}
        height={160}
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2"
      />
      <div className="relative h-16 w-16 shrink-0">
        <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
          <circle cx="32" cy="32" r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="5" />
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="url(#progGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - pct)}
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
            className={complete ? "animate-pulse-slow" : undefined}
          />
          <defs>
            <linearGradient id="progGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1ABC9C" />
              <stop offset="100%" stopColor="#27AE60" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono-stat text-sm font-bold text-parchment">
          {explored}
        </span>
      </div>
      <div className="pr-1">
        {complete ? (
          <p className="max-w-[9rem] text-xs font-semibold leading-snug text-forest-light">
            {t.challenge.progressReady}
          </p>
        ) : (
          <p className="text-xs leading-snug text-parchment/70">
            <span className="font-mono-stat font-bold text-parchment">
              {explored}/{total}
            </span>
            <br />
            {t.challenge.progressLabel}
          </p>
        )}
        {explored > 0 && (
          <button
            onClick={onReset}
            className="mt-1 inline-flex items-center gap-1 text-[10px] text-parchment/40 transition hover:text-parchment/70"
          >
            <RotateCcw size={10} />
            {t.challenge.resetLabel}
          </button>
        )}
      </div>
    </div>
  );
}

function burstConfetti(canvas: HTMLCanvasElement | null) {
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const colors = ["#1ABC9C", "#27AE60", "#4A90D9", "#D4A843", "#FF6B35", "#E74C3C"];
  const parts = Array.from({ length: 80 }, () => ({
    x: canvas.width / 2,
    y: canvas.height,
    vx: (Math.random() - 0.5) * 6,
    vy: -Math.random() * 9 - 4,
    size: Math.random() * 5 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
  }));

  const start = performance.now();
  const duration = 2000;

  const frame = (now: number) => {
    const elapsed = now - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    parts.forEach((p) => {
      p.vy += 0.18;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - elapsed / duration);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.6);
      ctx.restore();
    });
    if (elapsed < duration) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
  requestAnimationFrame(frame);
}
