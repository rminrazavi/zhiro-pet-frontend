interface SimpleMenuProps {
  items: string[];
}

export function SimpleMenu({ items }: SimpleMenuProps) {
  return (
    <div
      role="menu"
      className="
        absolute right-0 top-full z-[100]
        w-64
        rounded-xl
        border-2 border-border
        bg-surface
        p-3
        shadow-brutal-lg
      "
    >
      <div className="space-y-1">
        {items.map((item) => (
          <a
            key={item}
            href="#"
            className="
              block
              rounded-lg
              px-3 py-2.5
              text-sm
              font-bold
              text-foreground
              transition-colors
              hover:bg-primary
            "
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
