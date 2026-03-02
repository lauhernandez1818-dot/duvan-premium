import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { postres } from '@/data/postres';

export function PostresPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === 0 ? postres.length - 1 : (prev ?? 0) - 1));
  };
  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === postres.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  const current = activeIndex !== null ? postres[activeIndex] : null;

  return (
    <div className="pt-14 pb-12 px-[var(--page-padding-x)]">
      <main className="w-full max-w-[min(460px,100%)] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl font-extrabold text-white text-center mb-6"
        >
          Postres
        </motion.h1>
        <p className="text-gray-400 text-center text-sm mb-8">
          Dulces y repostería para cerrar tu menú.
        </p>
        <ul className="grid gap-4">
          {postres.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="list-none"
            >
              <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain"
                />
                <div className="p-4">
                  <h2 className="text-white font-bold">{item.title}</h2>
                  {item.descripcion && (
                    <p className="text-gray-400 text-sm mt-1">{item.descripcion}</p>
                  )}
                </div>
                <div className="px-4 pb-4 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="text-xs font-semibold text-white bg-white/10 border border-white/25 rounded-full px-3 py-1 hover:bg-white/15"
                  >
                    Ver en grande
                  </button>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </main>

      <AnimatePresence>
        {current && activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-full max-w-md mx-auto"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="bg-zinc-900/90 border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative bg-black">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full max-h-[65vh] object-contain bg-black"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-white font-bold text-lg">{current.title}</h2>
                  {current.descripcion && (
                    <p className="text-gray-300 text-sm mt-1">{current.descripcion}</p>
                  )}
                  <div className="flex items-center justify-between mt-4 text-[11px] text-gray-300">
                    <button type="button" onClick={goPrev} className="flex items-center gap-1 text-xs font-semibold text-white bg-white/10 border border-white/25 rounded-full px-3 py-1">
                      <ChevronLeft className="w-4 h-4" /> Anterior
                    </button>
                    <span>{activeIndex + 1} / {postres.length}</span>
                    <button type="button" onClick={goNext} className="flex items-center gap-1 text-xs font-semibold text-white bg-white/10 border border-white/25 rounded-full px-3 py-1">
                      Siguiente <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
