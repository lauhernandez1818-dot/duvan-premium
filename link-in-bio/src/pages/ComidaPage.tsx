import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { comidasNormales, type PlatoComida } from '@/data/comidas';
import { itemStagger, lightboxOverlay, lightboxCard } from '@/lib/motion';

const pageTitle = 'Menú Diario';
const pageSubtitle = 'Sección saludable y viandas. Cada plato listo para servir en tu empresa.';

type Slide = { tipo: 'image' | 'video'; plato: PlatoComida };

export function ComidaPage() {
  const slides: Slide[] = useMemo(
    () =>
      comidasNormales.flatMap<Slide>((plato) =>
        plato.video
          ? [
              { tipo: 'image', plato },
              { tipo: 'video', plato },
            ]
          : [{ tipo: 'image', plato }],
      ),
    [],
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (platoIndex: number) => {
    const firstSlide = slides.findIndex(
      (s) => s.plato.id === comidasNormales[platoIndex].id && s.tipo === 'image',
    );
    setActiveIndex(firstSlide === -1 ? 0 : firstSlide);
  };

  const closeLightbox = () => setActiveIndex(null);
  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : (prev ?? 0) - 1));
  };
  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  const currentSlide = activeIndex !== null ? slides[activeIndex] : null;
  const current = currentSlide?.plato ?? null;

  return (
    <div className="pt-14 pb-16 px-[var(--page-padding-x)]">
      <main className="w-full max-w-[min(460px,100%)] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-center mb-2 tracking-tight"
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            background: 'linear-gradient(180deg, #fff 0%, #93c5fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {pageTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          className="text-sm text-blue-200/90 text-center mb-8"
        >
          {pageSubtitle}
        </motion.p>

        <ul className="flex flex-col gap-5">
          {comidasNormales.map((plato, index) => (
            <motion.li
              key={plato.id}
              {...itemStagger(index)}
              className="list-none"
            >
              <article className="rounded-2xl border-2 border-blue-400/20 bg-gradient-to-b from-blue-950/30 to-blue-950/10 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <img src={plato.image} alt={plato.title} className="w-full h-auto object-contain" />
                <div className="p-4">
                  <h2 className="text-white font-semibold text-lg">{plato.title}</h2>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{plato.contiene}</p>
                </div>
                <div className="px-4 pb-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="text-xs font-semibold text-blue-300 hover:text-blue-200 rounded-full px-3 py-1.5 transition-colors"
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
        {current && currentSlide && activeIndex !== null && (
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
                <div className="bg-black flex justify-center">
                  {currentSlide.tipo === 'video' && current.video ? (
                    <video
                      src={current.video}
                      controls
                      playsInline
                      className="max-h-[65vh] w-auto object-contain aspect-[9/16]"
                    >
                      Tu navegador no soporta video.
                    </video>
                  ) : (
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full max-h-[65vh] object-contain"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-white font-semibold text-lg">{current.title}</h2>
                  <p className="text-gray-400 text-sm mt-1">{current.contiene}</p>
                  <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="text-white/80 hover:text-white font-medium"
                    >
                      ← Anterior
                    </button>
                    <span>{activeIndex + 1} / {slides.length}</span>
                    <button
                      type="button"
                      onClick={goNext}
                      className="text-white/80 hover:text-white font-medium"
                    >
                      Siguiente →
                    </button>
                  </div>
                  {currentSlide.tipo === 'image' && current.video && (
                    <p className="mt-2 text-[11px] text-white/50">
                      Siguiente: video de preparación
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
