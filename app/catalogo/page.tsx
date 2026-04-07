'use client';

import { motion } from 'framer-motion';
import { MapPin, UtensilsCrossed, Sparkles, Cake, ChefHat } from 'lucide-react';
import { LinkButton } from '@/src/components/catalogo/LinkButton';
import { FloatingParticles } from '@/src/components/catalogo/FloatingParticles';

const config = {
  title: 'INVERSIONES DUVAN',
  subtitle: 'Almuerzos corporativos',
  logoUrl: '/imagenes/logo-duvan.png',
  links: [
    { id: 'ubicacion', label: 'Ubicación', to: '/ubicacion' },
    { id: 'comida', label: 'Comida', to: '/comida' },
    { id: 'comida_especiales', label: 'Comida Especiales', to: '/comida-especiales' },
    { id: 'postres', label: 'Postres', to: '/postres' },
    { id: 'catering', label: 'Catering', to: '/catering' },
  ],
} as const;

const iconById: Record<string, React.ReactNode> = {
  ubicacion: <MapPin className="w-5 h-5" aria-hidden />,
  comida: <UtensilsCrossed className="w-5 h-5" aria-hidden />,
  comida_especiales: <Sparkles className="w-5 h-5" aria-hidden />,
  postres: <Cake className="w-5 h-5" aria-hidden />,
  catering: <ChefHat className="w-5 h-5" aria-hidden />,
};

export default function CatalogoPage() {
  return (
    <div className="link-bio-page relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center pt-[max(3.5rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))] antialiased overflow-hidden bg-black">
      {/* Fondo: foto de cocina a pantalla completa */}
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/imagenes/comida7.webp')] bg-cover bg-center scale-105 opacity-40"
        aria-hidden="true"
      />
      {/* Gradiente catálogo: azul Duvan arriba, transición rica */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-900/40 from-0% via-blue-950/60 via-30% via-black/80 via-60% to-black to-100%"
        aria-hidden="true"
      />
      {/* Resplandor azul superior */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(59,130,246,0.2),transparent_60%)]"
        aria-hidden="true"
      />
      
      {/* Partículas flotantes */}
      <FloatingParticles />

      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 w-full max-w-[460px] mx-auto flex flex-col flex-1 justify-center px-4"
      >
        <header className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.1 }}
            className="relative mx-auto flex items-center justify-center w-24 h-24 min-[380px]:w-28 min-[380px]:h-28 sm:w-32 sm:h-32"
          >
            {/* Glow pulsante detrás del logo */}
            <div className="absolute inset-0 rounded-full bg-blue-400/40 blur-3xl scale-150 animate-pulse" aria-hidden />
            {/* Anillo exterior */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-300/50 shadow-[0_0_50px_rgba(59,130,246,0.4)]" aria-hidden />
            {/* Círculo blanco con logo perfectamente centrado */}
            <div className="relative w-full h-full rounded-full border-2 border-blue-300/40 bg-white flex items-center justify-center overflow-hidden p-2.5 sm:p-3">
              <img
                src={config.logoUrl}
                alt="Logo Inversiones Duvan"
                className="w-full h-full object-contain object-center"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-5 sm:mt-6 text-xl min-[360px]:text-2xl min-[380px]:text-3xl sm:text-4xl font-bold tracking-[0.1em] uppercase text-white"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            {config.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="text-sm min-[380px]:text-base sm:text-lg text-white font-medium mt-2 tracking-wide"
          >
            {config.subtitle}
          </motion.p>
          {/* Línea decorativa */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mx-auto mt-4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            aria-hidden
          />
        </header>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center mb-5 sm:mb-6"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-white font-semibold">
            Bienvenido
          </p>
          <p className="mt-1.5 text-xs text-white/90">
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
          className="mt-8 sm:mt-10 text-center text-[11px] text-white tracking-[0.35em] uppercase font-semibold"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
        >
          Almuerzos que inspiran
        </motion.p>
      </motion.main>
    </div>
  );
}
