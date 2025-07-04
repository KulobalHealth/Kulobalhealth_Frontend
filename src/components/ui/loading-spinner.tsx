export function LoadingSpinner() {
  const dots = Array.from({ length: 16 }, (_, i) => ({
    id: `spinner-dot-${i}`,
    angle: i * 22.5,
    delay: i * 0.1,
  }));

  return (
    <div className="relative h-[50px] w-[50px]">
      {/* Main spinner ring */}
      <div className="absolute inset-0 rounded-full border-8 border-primary/20">
        <div className="absolute inset-0 animate-spin rounded-full border-8 border-transparent border-t-primary" />
      </div>

      {/* Inner circle */}
      <div className="absolute inset-2 rounded-full bg-white" />

      {/* 16 circular dots */}
      {dots.map((dot) => (
        <div
          className="absolute h-1 w-1 animate-pulse rounded-full bg-primary"
          key={dot.id}
          style={{
            top: `${3 + 22 + 22 * Math.cos((dot.angle * Math.PI) / 180)}px`,
            left: `${3 + 22 + 22 * Math.sin((dot.angle * Math.PI) / 180)}px`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
