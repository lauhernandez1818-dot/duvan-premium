import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { postres } from '@/data/postres';
import { itemStagger, lightboxOverlay, lightboxCard } from '@/lib/motion';

const pageTitle = 'Postres';
const pageSubtitle = 'Dulces y repostería para cerrar tu menú.';

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
    <div className="pt-14 pb-16 px-[var(--page-padding-x)]">
      <main className="w-full max-w-[min(460px,100%)] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-white text-center mb-2 tracking-tight"
          style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
        >
          {pageTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          className="text-sm text-gray-400 text-center mb-8"
        >
          {pageSubtitle}
        </motion.p>

        <ul className="flex flex-col gap-5">
          {postres.map((item, index) => (
            <motion.li
              key={item.id}
              {...itemStagger(index)}
              className="list-none"
            >
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-auto object-contain" />
                <div className="p-4">
                  <h2 className="text-white font-semibold text-lg">{item.title}</h2>
                  {item.descripcion && (
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{item.descripcion}</p>
                  )}
                </div>
                <div className="px-4 pb-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="text-xs font-medium text-white/70 hover:text-white rounded-full px-3 py-1.5 transition-colors"
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
            className="fixed inset-0 z-40 bg-black/90 flex items-center justify-center px-4"
            initial={lightboxOverlay.initial}
            animate={lightboxOverlay.animate}
            exit={lightboxOverlay.exit}
            transition={lightboxOverlay.transition}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-full max-w-md"
              initial={lightboxCard.initial}
              animate={lightboxCard.animate}
              exit={lightboxCard.exit}
              transition={lightboxCard.transition}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white/80 hover:text-white p-1"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/95 overflow-hidden">
                <div className="bg-black">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full max-h-[65vh] object-contain"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-white font-semibold text-lg">{current.title}</h2>
                  {current.descripcion && (
                    <p className="text-gray-400 text-sm mt-1">{current.descripcion}</p>
                  )}
                  <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="text-white/80 hover:text-white font-medium"
                    >
                      ← Anterior
                    </button>
                    <span>{activeIndex + 1} / {postres.length}</span>
                    <button
                      type="button"
                      onClick={goNext}
                      className="text-white/80 hover:text-white font-medium"
                    >
                      Siguiente →
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
