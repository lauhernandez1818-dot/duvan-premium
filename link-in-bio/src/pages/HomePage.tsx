import { motion } from 'framer-motion';
import { MapPin, UtensilsCrossed, Sparkles, Cake, ChefHat } from 'lucide-react';
import { config } from '@/config';
import { LinkButton } from '@/components/LinkButton';

const iconById: Record<string, React.ReactNode> = {
  ubicacion: <MapPin className="w-5 h-5" aria-hidden />,
  comida: <UtensilsCrossed className="w-5 h-5" aria-hidden />,
  comida_especiales: <Sparkles className="w-5 h-5" aria-hidden />,
  postres: <Cake className="w-5 h-5" aria-hidden />,
  catering: <ChefHat className="w-5 h-5" aria-hidden />,
};

export function HomePage() {
  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col items-center justify-start pt-[var(--safe-padding)] pb-8 sm:pb-12 px-[var(--page-padding-x)] antialiased">
      <main className="w-full max-w-[min(460px,100%)] mx-auto flex flex-col flex-1">
        <header className="text-center mb-5 sm:mb-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 min-[380px]:w-24 min-[380px]:h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-white/60 bg-white/95 shadow-xl overflow-hidden ring-2 ring-white/25 p-1.5 sm:p-2"
          >
            <img
              src={config.logoUrl}
              alt="Logo Inversiones Duvan"
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = `https://placehold.co/112x112/fef3c7/d97706?text=DUVAN`;
              }}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mt-3 sm:mt-4 text-lg min-[380px]:text-xl sm:text-2xl font-extrabold text-white tracking-tight px-1"
          >
            {config.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-xs min-[380px]:text-sm sm:text-base text-gray-400 font-medium mt-0.5 sm:mt-1 px-1"
          >
            {config.subtitle}
          </motion.p>
        </header>

        <motion.nav
          className="flex flex-col gap-3"
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
      </main>
    </div>
  );
}
