import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface NavTriggerProps {
  label: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export function NavTrigger({
  label,
  icon,
  isOpen,
  onClick,
}: NavTriggerProps) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={onClick}
      className="
        flex h-10 items-center gap-1.5
        rounded-lg
        px-3
        text-sm
        font-black
        text-foreground
        transition-colors
        hover:bg-surface-muted
        active:scale-[0.98]
      "
    >
      {icon}

      <span>{label}</span>

      <ChevronDownIcon
        className={`
          size-4
          transition-transform
          duration-200
          ${isOpen ? "rotate-180" : ""}
        `}
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </button>
  );
}