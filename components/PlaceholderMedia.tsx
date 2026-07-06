import Image from "next/image";

const VARIANTS: Record<string, string> = {
  gold: "from-[#3a2a12] via-[#1a1408] to-[#0a0a0a]",
  rose: "from-[#3a1f22] via-[#1a1210] to-[#0a0a0a]",
  olive: "from-[#2a2c18] via-[#161608] to-[#0a0a0a]",
  slate: "from-[#20242a] via-[#131414] to-[#0a0a0a]",
  clay: "from-[#33241a] via-[#181210] to-[#0a0a0a]",
  ink: "from-[#232323] via-[#141414] to-[#0a0a0a]",
};

export default function PlaceholderMedia({
  variant = "gold",
  label,
  src,
  alt = "",
  priority = false,
  className = "",
}: {
  variant?: keyof typeof VARIANTS;
  label?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${VARIANTS[variant]} ${className}`}>
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      )}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] tracking-wide text-paper/50 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
