import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { pageEnter } from '@/lib/motion';

export function PageLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col relative overflow-hidden bg-stone-950">
      {/* Fondo catálogo: gradiente ámbar dorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/30 via-amber-950/15 via-40% to-black pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-[480px] bg-amber-500/15 rounded-full blur-[160px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" aria-hidden />

      {!isHome && (
        <Link
          to="/"
          className="fixed top-4 left-4 z-20 flex items-center gap-2 text-amber-100 hover:text-amber-50 text-sm font-semibold py-2 px-4 rounded-full hover:bg-amber-500/20 border border-amber-400/20 transition-all"
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
