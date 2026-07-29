"use client";

export default function LeadButton({
  children,
  className,
  projectType,
}: {
  children: React.ReactNode;
  className?: string;
  projectType?: string;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new CustomEvent("open-lead-form", { detail: { projectType } }))
      }
      className={className}
    >
      {children}
    </button>
  );
}
