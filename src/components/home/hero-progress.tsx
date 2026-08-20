type HeroProgressProps = {
  duration: number;
  progressKey: number;
};

export function HeroProgress({ duration, progressKey }: HeroProgressProps) {
  return (
    <div
      key={progressKey}
      className="w-full"
      style={
        {
          "--hero-duration": `${duration}ms`,
        } as React.CSSProperties
      }
    >
      <div className="hero-progress" />
    </div>
  );
}
