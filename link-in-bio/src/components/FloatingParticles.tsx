/** Partículas flotantes para efecto premium en el fondo */

const PARTICLE_COUNT = 12;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  size: 2 + (i % 3),
  left: `${10 + (i * 7) % 80}%`,
  top: `${15 + (i * 11) % 70}%`,
  delay: i * 0.15,
  duration: 4 + (i % 4),
}));

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400/40"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
