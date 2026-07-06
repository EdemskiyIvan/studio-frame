"use client";

export default function AutoTabs({
  items,
  active,
  onSelect,
}: {
  items: string[];
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((label, i) => (
        <button
          key={label}
          onClick={() => onSelect(i)}
          className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm ${
            i === active
              ? "bg-ink text-paper"
              : "bg-black/5 text-ink/50 hover:bg-black/10 hover:text-ink/70"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
