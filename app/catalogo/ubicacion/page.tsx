'use client';

import { motion } from 'framer-motion';
import { MapPin, ChevronLeft, Home, Navigation } from 'lucide-react';
import { pageEnter } from '@/src/lib/catalogo/motion';
import Link from 'next/link';

const MAPS_URL = 'https://www.google.com/maps/search/Inversiones+Duvan+Caracas';
const pageTitle = 'Ubicación';
const pageSubtitle = 'Gran Caracas, Venezuela. Servimos en toda la zona metropolitana.';

export default function UbicacionPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-[460px] mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/catalogo" className="flex items-center gap-2 text-blue-400 font-bold text-sm">
            <ChevronLeft className="w-5 h-5" />
            Volver
          </Link>
          <Link href="/" className="p-2 text-white/60 hover:text-white transition-colors">
            <Home className="w-5 h-5" />
          </Link>
        </div>
      </nav>

      <div className="pt-20 px-4">
        <main className="w-full max-w-[460px] mx-auto">
          <motion.h1
            initial={pageEnter.initial}
            animate={pageEnter.animate}
            transition={pageEnter.transition}
            className="text-2xl sm:text-3xl font-bold text-center mb-2 tracking-tight text-white"
          >
            {pageTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.06, duration: 0.28 }}
            className="text-sm text-blue-200/60 text-center mb-12"
          >
            {pageSubtitle}
          </motion.p>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center group"
            >
              {/* Representación visual de mapa */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i12!2i1225!3i1225!2m3!1e0!2sm!3i345013117!3m8!2ses!3sVE!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center animate-bounce mb-4 shadow-[0_0_40px_rgba(220,38,38,0.3)]">
                  <MapPin className="w-10 h-10 text-red-500" />
                </div>
                <span className="text-white font-black text-xl tracking-tighter">CARACAS</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              <motion.a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.35 }}
                className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl border border-blue-500/30 bg-blue-600/10 text-white font-bold hover:bg-blue-600/20 shadow-xl transition-all active:scale-[0.98]"
              >
                <Navigation className="w-5 h-5 text-blue-400" />
                Abrir en Google Maps
              </motion.a>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-zinc-900/50 border border-white/10 rounded-2xl text-center"
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  Llegamos a todas las zonas de la Capital. Logística optimizada para que tus almuerzos lleguen siempre a tiempo y a la temperatura ideal.
                </p>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
