const siteUrl = typeof window !== "undefined" ? window.location.href : "";

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L7.4 4H5.6l12.1 16Z" />
    </svg>
  );
}

const platforms = [
  {
    name: "WhatsApp",
    color: "#25D366",
    href: (text: string) => `https://wa.me/?text=${encodeURIComponent(`${text} ${siteUrl}`)}`,
  },
  {
    name: "X",
    color: "#F5F1E9",
    href: (text: string) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(siteUrl)}`,
  },
  {
    name: "Facebook",
    color: "#1877F2",
    href: () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`,
  },
  {
    name: "Telegram",
    color: "#26A5E4",
    href: (text: string) => `https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(text)}`,
  },
];

export function ShareButtons({ text }: { text: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.href(text)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderColor: p.color, color: p.color }}
          className="flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition hover:scale-[0.98]"
        >
          {p.name === "X" ? <XIcon /> : <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />}
          {p.name}
        </a>
      ))}
    </div>
  );
}
