"use client";

export default function LeadButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-lead-form"))}
      className={className}
    >
      {children}
    </button>
  );
}
