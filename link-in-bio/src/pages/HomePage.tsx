import { motion } from 'framer-motion';
import { MapPin, UtensilsCrossed, Sparkles, Cake, ChefHat } from 'lucide-react';
import { config } from '@/config';
import { LinkButton } from '@/components/LinkButton';
import { FloatingParticles } from '@/components/FloatingParticles';

const iconById: Record<string, React.ReactNode> = {
  ubicacion: <MapPin className="w-5 h-5" aria-hidden />,
  comida: <UtensilsCrossed className="w-5 h-5" aria-hidden />,
  comida_especiales: <Sparkles className="w-5 h-5" aria-hidden />,
  postres: <Cake className="w-5 h-5" aria-hidden />,
  catering: <ChefHat className="w-5 h-5" aria-hidden />,
};

export function HomePage() {
  return (
    <div className="link-bio-page relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center pt-[var(--safe-padding)] pb-8 sm:pb-12 px-[var(--page-padding-x)] antialiased overflow-hidden">
      {/* Fondo: foto de cocina a pantalla completa, más visible */}
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/imagenes/comida7.webp')] bg-cover bg-center scale-105"
        aria-hidden="true"
      />
      {/* Gradiente catálogo: azul Duvan arriba, transición rica */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-900/40 from-0% via-blue-950/60 via-30% via-black/80 via-60% to-black to-100%"
        aria-hidden="true"
      />
      {/* Resplandor azul superior - efecto "wow" */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(59,130,246,0.2),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,var(--accent-glow),transparent_55%)]"
        aria-hidden="true"
      />
      {/* Vigneta dramática */}
      <div
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]"
        aria-hidden="true"
      />
      {/* Partículas flotantes - efecto premium */}
      <FloatingParticles />

      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-[min(460px,100%)] mx-auto flex flex-col flex-1 justify-center"
      >
        <header className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.1 }}
            className="relative inline-flex items-center justify-center w-24 h-24 min-[380px]:w-28 min-[380px]:h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden"
          >
            {/* Glow pulsante detrás del logo */}
            <div className="absolute inset-0 rounded-full bg-blue-400/40 blur-3xl scale-150 animate-[pulse-glow_3s_ease-in-out_infinite]" aria-hidden />
            {/* Anillo azul premium */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/30 via-blue-500/15 to-blue-700/5 blur-3xl scale-110" aria-hidden />
            <div className="absolute inset-0 rounded-full border-2 border-blue-300/50 shadow-[0_0_50px_rgba(59,130,246,0.4),0_0_100px_rgba(37,99,235,0.2)]" aria-hidden />
            <div className="relative w-full h-full rounded-full border-2 border-blue-300/40 bg-gradient-to-br from-white to-blue-50/90 p-2.5 sm:p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
              <img
                src={config.logoUrl}
                alt="Logo Inversiones Duvan"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = `https://placehold.co/112x112/93c5fd/1d4ed8?text=DUVAN`;
                }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-5 sm:mt-6 text-2xl min-[380px]:text-3xl sm:text-4xl font-bold tracking-[0.14em] uppercase px-2"
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              background: 'linear-gradient(135deg, #fff 0%, #bfdbfe 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 4s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6)) drop-shadow(0 0 20px rgba(59,130,246,0.3))',
            }}
          >
            {config.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="text-sm min-[380px]:text-base sm:text-lg text-blue-100 font-medium mt-2 tracking-wide px-1"
          >
            {config.subtitle}
          </motion.p>
          {/* Línea decorativa con brillo */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mx-auto mt-4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent origin-center rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            aria-hidden
          />
        </header>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center mb-5 sm:mb-6"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-blue-300 font-semibold">
            Bienvenido
          </p>
          <p className="mt-1.5 text-xs text-blue-200/90">
            Toca un botón para interactuar
          </p>
        </motion.div>

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.55 },
            },
            hidden: {},
          }}
          className="flex flex-col gap-4 sm:gap-5"
          aria-label="Enlaces principales"
        >
          {config.links.map((item, index) => (
            <LinkButton
              key={item.id}
              item={item}
              icon={iconById[item.id] ?? null}
              index={index}
            />
          ))}
        </motion.nav>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 sm:mt-10 text-center text-[11px] text-blue-300 tracking-[0.35em] uppercase font-semibold drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
        >
          Almuerzos que inspiran
        </motion.p>
      </motion.main>
    </div>
  );
}
