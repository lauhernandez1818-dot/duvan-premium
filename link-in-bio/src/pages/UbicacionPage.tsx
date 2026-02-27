import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MAPS_URL = 'https://www.google.com/maps/search/Inversiones+Duvan+Caracas';

export function UbicacionPage() {
  return (
    <div className="pt-14 pb-12 px-[var(--page-padding-x)]">
      <main className="w-full max-w-[min(460px,100%)] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl font-extrabold text-white text-center mb-2"
        >
          Ubicación
        </motion.h1>
        <p className="text-gray-400 text-center text-sm mb-8">
          Gran Caracas, Venezuela. Servimos en toda la zona.
        </p>
        <motion.a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/15"
        >
          <MapPin className="w-5 h-5" />
          Ver en Google Maps
        </motion.a>
      </main>
    </div>
  );
}
