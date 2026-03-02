import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { pageEnter } from '@/lib/motion';

export function PageLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col relative overflow-hidden bg-zinc-950">
      {/* Fondo esencial: gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" aria-hidden />

      {!isHome && (
        <Link
          to="/"
          className="fixed top-4 left-4 z-20 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium py-2 px-3 rounded-full hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Inicio
        </Link>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={pageEnter.initial}
          animate={pageEnter.animate}
          exit={pageEnter.exit}
          transition={pageEnter.transition}
          className="relative z-10 flex-1"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
