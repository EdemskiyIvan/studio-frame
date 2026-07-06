export default function CornerBrackets({ className = "" }: { className?: string }) {
  const corner = "absolute h-3 w-3 border-accent sm:h-4 sm:w-4";
  return (
    <div className={`pointer-events-none absolute inset-3 sm:inset-4 ${className}`}>
      <span className={`${corner} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${corner} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}
