import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { comidasEspeciales, type ComidaEspecialItem } from '@/data/comidaEspecial';

export function ComidaEspecialesPage() {
  type Slide = { tipo: 'image' | 'video'; item: ComidaEspecialItem };

  const slides: Slide[] = useMemo(
    () =>
      comidasEspeciales.flatMap<Slide>((item) =>
        item.video
          ? [
              { tipo: 'image', item },
              { tipo: 'video', item },
            ]
          : [{ tipo: 'image', item }],
      ),
    [],
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    // Siempre abrimos en la foto (primer slide del item)
    const baseIndex = slides.findIndex(
      (slide) => slide.item.id === comidasEspeciales[index].id && slide.tipo === 'image',
    );
    setActiveIndex(baseIndex === -1 ? 0 : baseIndex);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? prev : prev === 0 ? slides.length - 1 : prev - 1,
    );
  };

  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev === null ? prev : prev === slides.length - 1 ? 0 : prev + 1,
    );
  };

  const currentSlide =
    activeIndex !== null ? slides[activeIndex] : null;
  const current = currentSlide?.item ?? null;

  return (
    <div className="pt-14 pb-12 px-[var(--page-padding-x)]">
      <main className="w-full max-w-[min(460px,100%)] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl font-extrabold text-white text-center mb-2"
        >
          Comida Especiales
        </motion.h1>
        <p className="text-gray-400 text-center text-sm mb-8">
          Nuestras preparaciones estrella con foto y video de preparación.
        </p>

        <ul className="flex flex-col gap-4">
          {comidasEspeciales.map((item, index) => {
            const hasVideo = Boolean(item.video);
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="list-none"
              >
                <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-video object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h2 className="text-white font-bold text-lg">{item.title}</h2>
                    <p className="text-gray-400 text-sm mt-1">{item.descripcion}</p>
                  </div>

                  <div className="px-4 pb-4 flex items-center gap-3">
                    {hasVideo && (
                      <span className="text-[11px] font-medium text-amber-300 bg-amber-900/40 border border-amber-500/40 rounded-full px-3 py-1">
                        Incluye video de preparación
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="ml-auto text-xs font-semibold text-white bg-white/10 border border-white/25 rounded-full px-3 py-1 hover:bg-white/15"
                    >
                      Ver en grande
                    </button>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </main>

      <AnimatePresence>
        {current && currentSlide && activeIndex !== null && (
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
                  {currentSlide.tipo === 'video' && current.video ? (
                    <video
                      src={current.video}
                      controls
                      playsInline
                      className="w-full aspect-video max-h-[65vh] object-contain bg-black"
                    >
                      Tu navegador no soporta video.
                    </video>
                  ) : (
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full max-h-[65vh] object-contain bg-black"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-white font-bold text-lg">{current.title}</h2>
                  <p className="text-gray-300 text-sm mt-1">{current.descripcion}</p>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="flex items-center gap-1 text-xs font-semibold text-white bg-white/10 border border-white/25 rounded-full px-3 py-1"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Anterior
                    </button>
                    <span className="text-[11px] text-gray-300">
                      {activeIndex + 1} / {slides.length}
                    </span>
                    <button
                      type="button"
                      onClick={goNext}
                      className="flex items-center gap-1 text-xs font-semibold text-white bg-white/10 border border-white/25 rounded-full px-3 py-1"
                    >
                      Siguiente
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[11px] text-gray-300">
                    <span>
                      {activeIndex + 1} / {slides.length}
                    </span>
                    {currentSlide.tipo === 'image' && current.video && (
                      <span className="text-amber-300">
                        Siguiente: video de preparación
                      </span>
                    )}
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
