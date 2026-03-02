import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { pageEnter } from '@/lib/motion';

const MAPS_URL = 'https://www.google.com/maps/search/Inversiones+Duvan+Caracas';

const pageTitle = 'Ubicación';
const pageSubtitle = 'Gran Caracas, Venezuela. Servimos en toda la zona.';

export function UbicacionPage() {
  return (
    <div className="pt-14 pb-16 px-[var(--page-padding-x)]">
      <main className="w-full max-w-[min(460px,100%)] mx-auto">
        <motion.h1
          initial={pageEnter.initial}
          animate={pageEnter.animate}
          transition={pageEnter.transition}
          className="text-2xl sm:text-3xl font-semibold text-white text-center mb-2 tracking-tight"
          style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
        >
          {pageTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.06, duration: 0.28 }}
          className="text-sm text-gray-400 text-center mb-8"
        >
          {pageSubtitle}
        </motion.p>

        <motion.a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.35 }}
          className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-white/15 bg-white/[0.06] text-white font-semibold hover:bg-white/[0.1] transition-colors"
        >
          <MapPin className="w-5 h-5" />
          Ver en Google Maps
        </motion.a>
      </main>
    </div>
  );
}
